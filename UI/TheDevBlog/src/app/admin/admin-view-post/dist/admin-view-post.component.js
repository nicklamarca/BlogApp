"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminViewPostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http"); // Import HttpClientModule
var AdminViewPostComponent = /** @class */ (function () {
    function AdminViewPostComponent(route, postService) {
        this.route = route;
        this.postService = postService;
    }
    AdminViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            if (id) {
                _this.postService.getPostById(id).subscribe(function (response) {
                    _this.post = response;
                });
            }
        });
    };
    AdminViewPostComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-view-post',
            standalone: true,
            imports: [forms_1.FormsModule, common_1.CommonModule, http_1.HttpClientModule],
            templateUrl: './admin-view-post.component.html',
            styleUrl: './admin-view-post.component.css'
        })
    ], AdminViewPostComponent);
    return AdminViewPostComponent;
}());
exports.AdminViewPostComponent = AdminViewPostComponent;
