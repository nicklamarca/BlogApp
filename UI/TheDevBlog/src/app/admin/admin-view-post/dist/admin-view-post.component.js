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
    AdminViewPostComponent.prototype.onSubmit = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var updatePostRequest = {
            author: (_a = this.post) === null || _a === void 0 ? void 0 : _a.author,
            content: (_b = this.post) === null || _b === void 0 ? void 0 : _b.content,
            featuredImageUrl: (_c = this.post) === null || _c === void 0 ? void 0 : _c.featuredImageUrl,
            publishDate: (_d = this.post) === null || _d === void 0 ? void 0 : _d.publishDate,
            updatedDate: (_e = this.post) === null || _e === void 0 ? void 0 : _e.updatedDate,
            visible: (_f = this.post) === null || _f === void 0 ? void 0 : _f.visible,
            summary: (_g = this.post) === null || _g === void 0 ? void 0 : _g.summary,
            title: (_h = this.post) === null || _h === void 0 ? void 0 : _h.title,
            urlHandle: (_j = this.post) === null || _j === void 0 ? void 0 : _j.urlHandle
        };
        this.postService.updatePost((_k = this.post) === null || _k === void 0 ? void 0 : _k.id, updatePostRequest).subscribe(function (response) {
            alert('Post updated successfully');
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
