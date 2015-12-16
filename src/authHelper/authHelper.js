System.register(["angular2/core", "../svcConsts/svcConsts"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, svcConsts_1;
    var AuthHelper;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (svcConsts_1_1) {
                svcConsts_1 = svcConsts_1_1;
            }],
        execute: function() {
            AuthHelper = (function () {
                function AuthHelper() {
                    //function to parse the url query string
                    this.parseQueryString = function (url) {
                        var params = {}, queryString = url.substring(1), regex = /([^&=]+)=([^&]*)/g, m;
                        while (m = regex.exec(queryString)) {
                            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
                        }
                        return params;
                    };
                    this.params = this.parseQueryString(location.hash);
                    this.access_token = null;
                    //check for id_token or access_token in url
                    if (this.params["id_token"] != null)
                        this.getAccessToken();
                    else if (this.params["access_token"] != null)
                        this.access_token = this.params["access_token"];
                }
                AuthHelper.prototype.login = function () {
                    //redirect to get id_token
                    window.location.href = "https://login.microsoftonline.com/" + svcConsts_1.SvcConsts.TENTANT_ID +
                        "/oauth2/authorize?response_type=id_token&client_id=" + svcConsts_1.SvcConsts.CLIENT_ID +
                        "&redirect_uri=" + encodeURIComponent(window.location.href) +
                        "&state=SomeState&nonce=SomeNonce";
                };
                AuthHelper.prototype.getAccessToken = function () {
                    //redirect to get access_token
                    window.location.href = "https://login.microsoftonline.com/" + svcConsts_1.SvcConsts.TENTANT_ID +
                        "/oauth2/authorize?response_type=token&client_id=" + svcConsts_1.SvcConsts.CLIENT_ID +
                        "&resource=" + svcConsts_1.SvcConsts.GRAPH_RESOURCE +
                        "&redirect_uri=" + encodeURIComponent(window.location.href) +
                        "&prompt=none&state=SomeState&nonce=SomeNonce";
                };
                AuthHelper = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AuthHelper);
                return AuthHelper;
            })();
            exports_1("AuthHelper", AuthHelper);
        }
    }
});
//# sourceMappingURL=authHelper.js.map