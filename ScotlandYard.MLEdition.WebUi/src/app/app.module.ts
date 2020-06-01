import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GameViewComponent } from "./game-view/game-view.component";
import { SemiLoginComponent } from "./semi-login/semi-login.component";

@NgModule({
  declarations: [AppComponent, GameViewComponent, SemiLoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
