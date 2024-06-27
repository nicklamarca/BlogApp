"use strict";
exports.__esModule = true;
exports.routes = void 0;
var admin_posts_component_1 = require("./admin/admin-posts/admin-posts.component");
var admin_view_post_component_1 = require("./admin/admin-view-post/admin-view-post.component");
var admin_add_post_component_1 = require("./admin/admin-add-post/admin-add-post.component");
exports.routes = [
    {
        path: 'admin/posts',
        component: admin_posts_component_1.AdminPostsComponent
    },
    {
        path: 'admin/posts/add',
        component: admin_add_post_component_1.AdminAddPostComponent
    },
    {
        path: 'admin/posts/:id',
        component: admin_view_post_component_1.AdminViewPostComponent
    }
];
