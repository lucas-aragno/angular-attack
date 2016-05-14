System.register(['@angular/platform-browser-dynamic', './list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, list_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(list_component_1.ListComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map