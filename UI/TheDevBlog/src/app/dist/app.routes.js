"use strict";
exports.__esModule = true;
exports.routes = void 0;
var admin_posts_component_1 = require("./admin/admin-posts/admin-posts.component");
var admin_view_post_component_1 = require("./admin/admin-view-post/admin-view-post.component");
exports.routes = [
    {
        path: 'admin/posts',
        component: admin_posts_component_1.AdminPostsComponent
    },
    {
        path: 'admin/posts/:id',
        component: admin_view_post_component_1.AdminViewPostComponent
    }
];
