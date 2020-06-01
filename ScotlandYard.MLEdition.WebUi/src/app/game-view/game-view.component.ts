import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as L from "leaflet";
import { HttpClient } from "@angular/common/http";
import { log } from "util";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-game-view",
  templateUrl: "./game-view.component.html",
  styleUrls: ["./game-view.component.scss"],
})
export class GameViewComponent implements OnInit {
  constructor(
    private client: HttpClient,
    private authService: AuthenticationService
  ) {
    client.get<MapInfo>("api/map/info?name=map_old").forEach((mapData) => {
      log(mapData.Title);
      let map = L.map("map", {
        minZoom: mapData.MinZoom,
        maxZoom: mapData.MaxZoom,
        crs: L.CRS.Simple,
      }).setView([0, 0], 7);

      //sw = (maxY + 1) * tileSize * 2
      //nE = (maxX + 1) * tileSize * 2
      let sW = map.unproject(
        [-20, (mapData.YCount + 1) * mapData.TileSize * 2],
        map.getMaxZoom() + 1
      );
      let nE = map.unproject(
        [(mapData.XCount + 1) * mapData.TileSize * 2, -200],
        map.getMaxZoom() + 1
      );
      map.setMaxBounds(new L.LatLngBounds(nE, sW));
      //map.setMinBounds(new L.LatLngBounds(nE,sW));
      const tiles = L.tileLayer("api/map/tile?z={z}&x={x}&y={y}", {
        attribution:
          "© 1983 by Otto Maier Verlag Ravensburg • 822118 Design: Binz-Blanke / Online version by Maximilian Krüger",
        tileSize: mapData.TileSize,
      }).addTo(map);
      //x = dataCoordX / 100
      //y = dataCoordY / 100 * -1
      //marker([y,x])
      //assets/icons/noun_Police_11036.svg
      // let police = L.icon({
      //   iconUrl: "assets/icons/noun_Police_11036.svg",
      //   iconSize: [80, 100],
      //   className: "bobby"
      // });
      let police = L.divIcon({
        html:
          "<svg class='bobby' viewBox='-9.683 0.149 58.394 125'><style>.a{font-weight:bold;}</style><path d='M3.019 26.674l16.875 4.586 16.809-4.664 -3.514-3.467c0 0 0.724-11.555-3.044-16.858 -3.138-4.412-8.211-5.751-10.154-6.116l-0.194-0.006c-1.924 0.357-7.033 1.69-10.185 6.122 -3.771 5.303-3.045 16.858-3.045 16.858L3.019 26.674zM17.671 10.056l-1.347-3.591h7.246l-1.356 3.729c1.899 0.906 3.222 2.827 3.222 5.07 0 3.11-2.522 5.632-5.631 5.632 -3.111 0-5.633-2.521-5.633-5.632C14.172 12.91 15.619 10.898 17.671 10.056z'/><path d='M19.901 33.99L9.062 31.044c-0.011 0.207-0.031 0.408-0.031 0.617 0 6.028 4.887 10.914 10.913 10.914 6.028 0 10.913-4.887 10.913-10.914 0-0.236-0.02-0.467-0.035-0.701L19.901 33.99z'/><path d='M36.002 45.125c-0.018-0.008-0.266-0.112-1.45-0.22 -0.841-0.076-5.367-0.09-7.124-0.094L5.481 44.819c-8.717 0-15.164 7.109-15.164 15.979v33.488c0 7.349 9.709 7.349 9.709 0V61.811h3.052l0.035 38.339h32.925l0.011-38.339h3.029v32.476c0 7.404 9.655 7.404 9.633 0V61.023C48.711 53.717 43.862 46.566 36.002 45.125zM19.911 93.022c-1.816 0-3.289-1.473-3.289-3.291 0-1.816 1.473-3.289 3.289-3.289 1.818 0 3.29 1.474 3.29 3.289C23.201 91.55 21.73 93.022 19.911 93.022zM19.911 81.726c-1.816 0-3.289-1.473-3.289-3.289 0-1.817 1.473-3.292 3.289-3.292 1.818 0 3.29 1.475 3.29 3.292C23.201 80.253 21.73 81.726 19.911 81.726zM19.911 70.539c-1.816 0-3.289-1.473-3.289-3.29s1.473-3.29 3.289-3.29c1.818 0 3.29 1.474 3.29 3.29C23.201 69.067 21.73 70.539 19.911 70.539zM19.911 59.023c-1.816 0-3.289-1.472-3.289-3.289 0-1.816 1.473-3.29 3.289-3.29 1.818 0 3.29 1.474 3.29 3.29C23.201 57.552 21.73 59.023 19.911 59.023z'/></svg>",
      });
      let gangster = L.divIcon({
        html:
          "<svg class='al-capone' viewBox='0 0 100 125'><switch><foreignObject requiredExtensions='http://ns.adobe.com/AdobeIllustrator/10.0/' width='1' height='1'/><g><g><path d='M86.7 40.5c-1-0.3-2-0.4-3-0.3l0.9-2.4c0.4-1.2 0.1-2.6-0.9-3.4l-2.1-1.7 1.2-3.4c0.2-0.4 0.1-0.9-0.2-1.3l-1.1-1.3 1.9-5.4c0.2-0.7-0.1-1.4-0.8-1.6l-2.5-0.9c-0.7-0.2-1.4 0.1-1.6 0.8l-7.3 20.4c-0.4 1.1 0.4 2.4 1.3 2.7 0.9 0.3 2.3-0.2 2.3-0.2l3.3 3.3c-1.9 4.7-5 9.5-6.7 10.3 -1-0.5-2.9-2.2-4.1-3.3 -4.2-3.8-9.4-8.5-16.4-8.5h-1.3l-3.9 13.4 -2-8.8h0.2c0.7 0 1.2-0.6 1.2-1.2v-2.3c0-0.7-0.6-1.2-1.2-1.2h-2.9c-0.7 0-1.2 0.6-1.2 1.2v2.3c0 0.7 0.6 1.2 1.2 1.2H41l-2 8.8 -3.9-13.4h-1.3c-11.2 0-15.5 12-17.9 18.4 -0.3 0.8-0.6 1.7-0.9 2.3C12.6 70.8 9.5 86 9.2 87.7c-0.7 3.5 1.6 6.8 5 7.5 0.4 0.1 0.8 0.1 1.2 0.1 3 0 5.6-2.1 6.2-5.1 1.2-6 3.6-16.8 5-20.3 0.3-0.7 0.6-1.7 1-2.6l0.5 24.4c0.1 3.2 2.7 5.8 5.9 5.8h16.4c3.2 0 5.9-2.5 5.9-5.8l0.6-31c0.6 0.5 1.1 1 1.7 1.5 3.1 2.8 6.3 5.7 10.3 6.5 13 2.6 20.3-16.3 21.6-20.1C91.7 45.3 90 41.7 86.7 40.5zM81.2 39.6l-1.7-1.2 1.1-3 1.4 1.1c0.1 0.1 0.2 0.3 0.1 0.4L81.2 39.6z'/><path d='M27.7 23.3c-0.2 1-0.3 1.9-0.3 3 0 8.2 6.6 14.8 14.8 14.8s14.9-6.7 14.9-14.8c0-1-0.1-2-0.3-3 -6 1.2-13.2 1.3-14.6 1.3C40.9 24.6 33.7 24.5 27.7 23.3z'/><path d='M42.3 22.8c11.8 0 21.3-2.2 21.3-5 0-1.6-3.2-3-8.1-3.9l0.5 2.1c0.1 0.5-0.2 1-0.6 1.1 -0.1 0-0.1 0-0.2 0 -0.4 0-0.8-0.3-0.8-0.7l-2-8.7c-0.4-1.7-2.1-2.8-3.8-2.4l-3.3 0.8c-1.8 0.4-3.8 0.4-5.6 0l-3.3-0.8c-1.7-0.4-3.4 0.7-3.8 2.4l-2 8.7c-0.1 0.5-0.6 0.8-1.1 0.7 -0.5-0.1-0.8-0.6-0.7-1.1l0.5-2.1c-5 0.9-8.1 2.3-8.1 3.9C21 20.6 30.5 22.8 42.3 22.8z'/><path d='M81.1 16.1c-0.1 0.6 0.7 0.9 1 0.4 1-1.4 2-3.4 1.9-5.1 -0.2-3.1-2.1-4-2.2-5.6 0-0.6 0-1.7 0.2-2.7 0.1-0.6-0.8-0.9-1.1-0.3 -0.7 1.4-1.4 3-1.3 4.2 0.1 2.3 1.7 2.7 1.9 4.4C81.6 12.5 81.4 14.5 81.1 16.1z'/></g></g></switch></svg>",
      });

      client.get<PlayerInfo>("api/map/player").forEach((info) => {
        if (info.mrX) L.marker([-0.78, 3.18], { icon: gangster }).addTo(map);
        else L.marker([-0.42, 7.82], { icon: police }).addTo(map);
      });
    });
  }

  ngOnInit() {}
}
