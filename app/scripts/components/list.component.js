System.register(['@angular/core', './repo.component', '../services/repo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, repo_component_1, repo_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (repo_component_1_1) {
                repo_component_1 = repo_component_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(listService) {
                    this.listService = listService;
                }
                ListComponent.prototype.getRepoList = function () {
                    this.repos = this.listService.getRepos('test');
                    //(/ repos => this.repos = repos);
                };
                ListComponent.prototype.ngOnInit = function () {
                    this.getRepoList();
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-list',
                        templateUrl: 'app/templates/list.html',
                        directives: [repo_component_1.RepoComponent],
                        providers: [repo_service_1.ListService]
                    }), 
                    __metadata('design:paramtypes', [repo_service_1.ListService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map