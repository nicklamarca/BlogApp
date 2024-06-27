import { Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';

export const routes: Routes = [
    {
        path: 'admin/posts',
        component: AdminPostsComponent
    },
    {
        path: 'admin/posts/:id',
        component: AdminViewPostComponent
    }
];

