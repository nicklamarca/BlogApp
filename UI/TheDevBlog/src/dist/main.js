"use strict";
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http"); // Import provideHttpClient
var router_1 = require("@angular/router");
var app_component_1 = require("./app/app.component"); // Root component
var app_routes_1 = require("./app/app.routes"); // Import routes
platform_browser_1.bootstrapApplication(app_component_1.AppComponent, {
    providers: [
        router_1.provideRouter(app_routes_1.routes),
        http_1.provideHttpClient() // Provide HttpClientModule
    ]
})["catch"](function (err) { return console.error(err); });
