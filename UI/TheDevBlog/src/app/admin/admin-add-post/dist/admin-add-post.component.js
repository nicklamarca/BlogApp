"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminAddPostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var AdminAddPostComponent = /** @class */ (function () {
    function AdminAddPostComponent(postService) {
        this.postService = postService;
        this.post = {
            author: '',
            content: '',
            featuredImageUrl: '',
            publishDate: '',
            updatedDate: '',
            visible: false,
            summary: '',
            title: '',
            urlHandle: ''
        };
    }
    AdminAddPostComponent.prototype.onSubmit = function () {
        this.postService.addPost(this.post).subscribe(function (response) {
            alert('Post added successfully');
        });
    };
    AdminAddPostComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-add-post',
            standalone: true,
            imports: [forms_1.FormsModule, common_1.CommonModule],
            templateUrl: './admin-add-post.component.html',
            styleUrl: './admin-add-post.component.css'
        })
    ], AdminAddPostComponent);
    return AdminAddPostComponent;
}());
exports.AdminAddPostComponent = AdminAddPostComponent;