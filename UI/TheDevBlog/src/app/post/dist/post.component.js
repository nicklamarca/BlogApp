"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var PostComponent = /** @class */ (function () {
    function PostComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostComponent.prototype.ngOnInit = function () {
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
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            standalone: true,
            imports: [common_1.CommonModule],
            templateUrl: './post.component.html',
            styleUrl: './post.component.css'
        })
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
