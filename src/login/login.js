System.register(["angular2/core", "../authHelper/authHelper"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authHelper_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authHelper_1_1) {
                authHelper_1 = authHelper_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(auth) {
                    this.authHelper = auth;
                }
                Login.prototype.login = function () {
                    // Use the AuthHelper to start the login flow
                    this.authHelper.login();
                };
                Login = __decorate([
                    core_1.Component({
                        selector: "login"
                    }),
                    core_1.View({
                        templateUrl: "src/login/view-login.html"
                    }), 
                    __metadata('design:paramtypes', [authHelper_1.AuthHelper])
                ], Login);
                return Login;
            })();
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map