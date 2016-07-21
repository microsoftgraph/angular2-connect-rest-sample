System.register([], function(exports_1) {
    var SvcConsts;
    return {
        setters:[],
        execute: function() {
            SvcConsts = (function () {
                function SvcConsts() {
                }
                // mike's test app
                // public static CLIENT_ID:string = "0752ef19-c4a5-4455-8a62-6d6c364fa42b";
                // public static TENANT_ID:string = "nitrosoftware.onmicrosoft.com";
                // public static GRAPH_RESOURCE:string = "https://graph.microsoft.com";
                // from max's app
                // secret bv3Q3AGCshIhUItbB7bSbY+dqWkEdICxl4QjfE3HrJM=
                SvcConsts.CLIENT_ID = "e1b4ae9c-8ac6-44dc-a048-756193b0fded";
                // public static CLIENT_ID:string = "ae146da8-887a-47bf-9a65-149b103543cd";
                SvcConsts.TENANT_ID = "nitrosoftware.onmicrosoft.com";
                // public static TENANT_ID:string = "rzdemos.onmicrosoft.com";
                // public static TENANT_ID:string = "common";
                SvcConsts.GRAPH_RESOURCE = "https://graph.microsoft.com";
                return SvcConsts;
            })();
            exports_1("SvcConsts", SvcConsts);
        }
    }
});
//# sourceMappingURL=svcConsts.js.map