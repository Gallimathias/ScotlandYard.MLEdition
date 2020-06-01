(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-view/game-view.component */ "./src/app/game-view/game-view.component.ts");
/* harmony import */ var _semi_login_semi_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./semi-login/semi-login.component */ "./src/app/semi-login/semi-login.component.ts");





var routes = [
    { path: "", pathMatch: "full", redirectTo: "/semi-login" },
    { path: "game", component: _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_3__["GameViewComponent"] },
    { path: "semi-login", component: _semi_login_semi_login_component__WEBPACK_IMPORTED_MODULE_4__["SemiLoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ScotlandYardMLEdition';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-view/game-view.component */ "./src/app/game-view/game-view.component.ts");
/* harmony import */ var _semi_login_semi_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./semi-login/semi-login.component */ "./src/app/semi-login/semi-login.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _game_view_game_view_component__WEBPACK_IMPORTED_MODULE_6__["GameViewComponent"], _semi_login_semi_login_component__WEBPACK_IMPORTED_MODULE_7__["SemiLoginComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.IsAuthenticated = false;
        this.baseUri = "api/authentication/";
        this.load();
    }
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem("bearer");
    };
    AuthenticationService.prototype.getBearer = function () {
        return "bearer " + this.getToken();
    };
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem("bearer", token);
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        this.httpClient
            .post(this.baseUri + "login/user", {
            Username: username,
            Password: password,
        })
            .subscribe(function (token) {
            _this.setToken(token);
            _this.IsAuthenticated = true;
        });
    };
    AuthenticationService.prototype.newSemiId = function () {
        return this.httpClient.get(this.baseUri + "newguid");
    };
    AuthenticationService.prototype.semiLogin = function (guid) {
        var _this = this;
        return this.httpClient
            .post(this.baseUri + "login/semi", { SemiId: guid })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
            _this.setToken(token);
            _this.IsAuthenticated = true;
            return _this.IsAuthenticated;
        }));
    };
    AuthenticationService.prototype.load = function () {
        var _this = this;
        var bearer = this.getToken();
        if (bearer) {
            this.httpClient.get(this.baseUri + "test").subscribe(function (v) { return (_this.IsAuthenticated = true); }, function (ex) { return (_this.IsAuthenticated = false); });
        }
        else {
            this.IsAuthenticated = false;
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/game-view/game-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/game-view/game-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"container left\">\n    This is left information\n  </div>\n  <div class=\"container map\">\n    <div class=\"map frame\">\n      <div id=\"map\"></div>\n    </div>\n  </div>\n  <div class=\"container down\">\n    This is Down Information\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/game-view/game-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/game-view/game-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.container {\n  display: grid;\n  grid-template-columns: [left-bar] 10% [main-col] auto;\n  grid-template-rows: [main-row] auto [foot-bar] 10%; }\n\n.container.left {\n  grid-column: left-bar;\n  grid-row: main-row / foot-bar;\n  background-color: blue; }\n\n.container.down {\n  grid-column: left-bar / span 2;\n  grid-row: foot-bar;\n  background-color: blueviolet; }\n\n.container.map {\n  width: 114rem;\n  height: 58rem;\n  grid-row: main-row;\n  grid-column: main-col;\n  justify-self: stretch; }\n\n.map.frame {\n  height: 100%; }\n\n#map {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS12aWV3L0M6XFxQcm9qZWN0c1xcUHJpdmF0XFxTY290bGFuZFlhcmQuTUxFZGl0aW9uXFxTY290bGFuZFlhcmQuTUxFZGl0aW9uLldlYlVpL3NyY1xcYXBwXFxnYW1lLXZpZXdcXGdhbWUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxREFBbUQ7RUFDbkQsa0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nYW1lLXZpZXcvZ2FtZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtsZWZ0LWJhcl0xMCUgW21haW4tY29sXWF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbbWFpbi1yb3ddYXV0byBbZm9vdC1iYXJdMTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLmxlZnQge1xyXG4gIGdyaWQtY29sdW1uOiBsZWZ0LWJhcjtcclxuICBncmlkLXJvdzogbWFpbi1yb3cgLyBmb290LWJhcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi5jb250YWluZXIuZG93biB7XHJcbiAgZ3JpZC1jb2x1bW46IGxlZnQtYmFyIC8gc3BhbiAyO1xyXG4gIGdyaWQtcm93OiBmb290LWJhcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLm1hcCB7XHJcbiAgd2lkdGg6IDExNHJlbTtcclxuICBoZWlnaHQ6IDU4cmVtO1xyXG4gIGdyaWQtcm93OiBtYWluLXJvdztcclxuICBncmlkLWNvbHVtbjogbWFpbi1jb2w7XHJcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xyXG59XHJcblxyXG4ubWFwLmZyYW1lIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNtYXAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game-view/game-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-view/game-view.component.ts ***!
  \**************************************************/
/*! exports provided: GameViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameViewComponent", function() { return GameViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





var GameViewComponent = /** @class */ (function () {
    function GameViewComponent(client) {
        this.client = client;
        client.get("api/map/info?name=map_old").forEach(function (mapData) {
            Object(util__WEBPACK_IMPORTED_MODULE_4__["log"])(mapData.Title);
            var map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]("map", {
                minZoom: mapData.MinZoom,
                maxZoom: mapData.MaxZoom,
                crs: leaflet__WEBPACK_IMPORTED_MODULE_2__["CRS"].Simple,
            }).setView([0, 0], 7);
            //sw = (maxY + 1) * tileSize * 2
            //nE = (maxX + 1) * tileSize * 2
            var sW = map.unproject([-20, (mapData.YCount + 1) * mapData.TileSize * 2], map.getMaxZoom() + 1);
            var nE = map.unproject([(mapData.XCount + 1) * mapData.TileSize * 2, -200], map.getMaxZoom() + 1);
            map.setMaxBounds(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLngBounds"](nE, sW));
            //map.setMinBounds(new L.LatLngBounds(nE,sW));
            var tiles = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]("api/map/tile?z={z}&x={x}&y={y}", {
                attribution: "© 1983 by Otto Maier Verlag Ravensburg • 822118 Design: Binz-Blanke / Online version by Maximilian Krüger",
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
            var police = leaflet__WEBPACK_IMPORTED_MODULE_2__["divIcon"]({
                html: "<svg class='bobby' viewBox='-9.683 0.149 58.394 125'><style>.a{font-weight:bold;}</style><path d='M3.019 26.674l16.875 4.586 16.809-4.664 -3.514-3.467c0 0 0.724-11.555-3.044-16.858 -3.138-4.412-8.211-5.751-10.154-6.116l-0.194-0.006c-1.924 0.357-7.033 1.69-10.185 6.122 -3.771 5.303-3.045 16.858-3.045 16.858L3.019 26.674zM17.671 10.056l-1.347-3.591h7.246l-1.356 3.729c1.899 0.906 3.222 2.827 3.222 5.07 0 3.11-2.522 5.632-5.631 5.632 -3.111 0-5.633-2.521-5.633-5.632C14.172 12.91 15.619 10.898 17.671 10.056z'/><path d='M19.901 33.99L9.062 31.044c-0.011 0.207-0.031 0.408-0.031 0.617 0 6.028 4.887 10.914 10.913 10.914 6.028 0 10.913-4.887 10.913-10.914 0-0.236-0.02-0.467-0.035-0.701L19.901 33.99z'/><path d='M36.002 45.125c-0.018-0.008-0.266-0.112-1.45-0.22 -0.841-0.076-5.367-0.09-7.124-0.094L5.481 44.819c-8.717 0-15.164 7.109-15.164 15.979v33.488c0 7.349 9.709 7.349 9.709 0V61.811h3.052l0.035 38.339h32.925l0.011-38.339h3.029v32.476c0 7.404 9.655 7.404 9.633 0V61.023C48.711 53.717 43.862 46.566 36.002 45.125zM19.911 93.022c-1.816 0-3.289-1.473-3.289-3.291 0-1.816 1.473-3.289 3.289-3.289 1.818 0 3.29 1.474 3.29 3.289C23.201 91.55 21.73 93.022 19.911 93.022zM19.911 81.726c-1.816 0-3.289-1.473-3.289-3.289 0-1.817 1.473-3.292 3.289-3.292 1.818 0 3.29 1.475 3.29 3.292C23.201 80.253 21.73 81.726 19.911 81.726zM19.911 70.539c-1.816 0-3.289-1.473-3.289-3.29s1.473-3.29 3.289-3.29c1.818 0 3.29 1.474 3.29 3.29C23.201 69.067 21.73 70.539 19.911 70.539zM19.911 59.023c-1.816 0-3.289-1.472-3.289-3.289 0-1.816 1.473-3.29 3.289-3.29 1.818 0 3.29 1.474 3.29 3.29C23.201 57.552 21.73 59.023 19.911 59.023z'/></svg>",
            });
            var gangster = leaflet__WEBPACK_IMPORTED_MODULE_2__["divIcon"]({
                html: "<svg class='al-capone' viewBox='0 0 100 125'><switch><foreignObject requiredExtensions='http://ns.adobe.com/AdobeIllustrator/10.0/' width='1' height='1'/><g><g><path d='M86.7 40.5c-1-0.3-2-0.4-3-0.3l0.9-2.4c0.4-1.2 0.1-2.6-0.9-3.4l-2.1-1.7 1.2-3.4c0.2-0.4 0.1-0.9-0.2-1.3l-1.1-1.3 1.9-5.4c0.2-0.7-0.1-1.4-0.8-1.6l-2.5-0.9c-0.7-0.2-1.4 0.1-1.6 0.8l-7.3 20.4c-0.4 1.1 0.4 2.4 1.3 2.7 0.9 0.3 2.3-0.2 2.3-0.2l3.3 3.3c-1.9 4.7-5 9.5-6.7 10.3 -1-0.5-2.9-2.2-4.1-3.3 -4.2-3.8-9.4-8.5-16.4-8.5h-1.3l-3.9 13.4 -2-8.8h0.2c0.7 0 1.2-0.6 1.2-1.2v-2.3c0-0.7-0.6-1.2-1.2-1.2h-2.9c-0.7 0-1.2 0.6-1.2 1.2v2.3c0 0.7 0.6 1.2 1.2 1.2H41l-2 8.8 -3.9-13.4h-1.3c-11.2 0-15.5 12-17.9 18.4 -0.3 0.8-0.6 1.7-0.9 2.3C12.6 70.8 9.5 86 9.2 87.7c-0.7 3.5 1.6 6.8 5 7.5 0.4 0.1 0.8 0.1 1.2 0.1 3 0 5.6-2.1 6.2-5.1 1.2-6 3.6-16.8 5-20.3 0.3-0.7 0.6-1.7 1-2.6l0.5 24.4c0.1 3.2 2.7 5.8 5.9 5.8h16.4c3.2 0 5.9-2.5 5.9-5.8l0.6-31c0.6 0.5 1.1 1 1.7 1.5 3.1 2.8 6.3 5.7 10.3 6.5 13 2.6 20.3-16.3 21.6-20.1C91.7 45.3 90 41.7 86.7 40.5zM81.2 39.6l-1.7-1.2 1.1-3 1.4 1.1c0.1 0.1 0.2 0.3 0.1 0.4L81.2 39.6z'/><path d='M27.7 23.3c-0.2 1-0.3 1.9-0.3 3 0 8.2 6.6 14.8 14.8 14.8s14.9-6.7 14.9-14.8c0-1-0.1-2-0.3-3 -6 1.2-13.2 1.3-14.6 1.3C40.9 24.6 33.7 24.5 27.7 23.3z'/><path d='M42.3 22.8c11.8 0 21.3-2.2 21.3-5 0-1.6-3.2-3-8.1-3.9l0.5 2.1c0.1 0.5-0.2 1-0.6 1.1 -0.1 0-0.1 0-0.2 0 -0.4 0-0.8-0.3-0.8-0.7l-2-8.7c-0.4-1.7-2.1-2.8-3.8-2.4l-3.3 0.8c-1.8 0.4-3.8 0.4-5.6 0l-3.3-0.8c-1.7-0.4-3.4 0.7-3.8 2.4l-2 8.7c-0.1 0.5-0.6 0.8-1.1 0.7 -0.5-0.1-0.8-0.6-0.7-1.1l0.5-2.1c-5 0.9-8.1 2.3-8.1 3.9C21 20.6 30.5 22.8 42.3 22.8z'/><path d='M81.1 16.1c-0.1 0.6 0.7 0.9 1 0.4 1-1.4 2-3.4 1.9-5.1 -0.2-3.1-2.1-4-2.2-5.6 0-0.6 0-1.7 0.2-2.7 0.1-0.6-0.8-0.9-1.1-0.3 -0.7 1.4-1.4 3-1.3 4.2 0.1 2.3 1.7 2.7 1.9 4.4C81.6 12.5 81.4 14.5 81.1 16.1z'/></g></g></switch></svg>",
            });
            client.get("api/map/player").forEach(function (info) {
                if (info.mrX)
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([-0.78, 3.18], { icon: gangster }).addTo(map);
                else
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([-0.42, 7.82], { icon: police }).addTo(map);
            });
        });
    }
    GameViewComponent.prototype.ngOnInit = function () { };
    GameViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-game-view",
            template: __webpack_require__(/*! ./game-view.component.html */ "./src/app/game-view/game-view.component.html"),
            styles: [__webpack_require__(/*! ./game-view.component.scss */ "./src/app/game-view/game-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GameViewComponent);
    return GameViewComponent;
}());



/***/ }),

/***/ "./src/app/semi-login/semi-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/semi-login/semi-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>Your Id:</div>\n  <div>{{ CurrentId }}</div>\n  <button (click)=\"login()\">Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/semi-login/semi-login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/semi-login/semi-login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbWktbG9naW4vc2VtaS1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/semi-login/semi-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/semi-login/semi-login.component.ts ***!
  \****************************************************/
/*! exports provided: SemiLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiLoginComponent", function() { return SemiLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SemiLoginComponent = /** @class */ (function () {
    function SemiLoginComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.CurrentId = "";
        authService.newSemiId().subscribe(function (guid) { return (_this.CurrentId = guid); });
    }
    SemiLoginComponent.prototype.ngOnInit = function () { };
    SemiLoginComponent.prototype.login = function () {
        var _this = this;
        this.authService
            .semiLogin(this.CurrentId)
            .subscribe(function (auth) { return _this.router.navigateByUrl("game"); });
    };
    SemiLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-semi-login",
            template: __webpack_require__(/*! ./semi-login.component.html */ "./src/app/semi-login/semi-login.component.html"),
            styles: [__webpack_require__(/*! ./semi-login.component.scss */ "./src/app/semi-login/semi-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SemiLoginComponent);
    return SemiLoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Privat\ScotlandYard.MLEdition\ScotlandYard.MLEdition.WebUi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map