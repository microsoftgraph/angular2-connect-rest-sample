System.register(["angular2/core", "angular2/platform/browser", "angular2/router", "angular2/http", "../login/login", "../files/files", "../authHelper/authHelper"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, http_1, login_1, files_1, authHelper_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (files_1_1) {
                files_1 = files_1_1;
            },
            function (authHelper_1_1) {
                authHelper_1 = authHelper_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(router, auth) {
                    // Route the user to a view based on presence of access token
                    if (auth.access_token !== null) {
                        // access token exists...display the users files
                        router.navigate(["/Files"]);
                    }
                    else {
                        // access token doesn't exist, so the user needs to login
                        router.navigate(["/Login"]);
                    }
                }
                App = __decorate([
                    core_1.Component({
                        selector: "files-app",
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { name: "Login", component: login_1.Login, path: "/login" },
                        { name: "Files", component: files_1.Files, path: "/files" }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, authHelper_1.AuthHelper])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [authHelper_1.AuthHelper, router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map