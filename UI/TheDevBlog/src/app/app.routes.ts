import { Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './admin/admin-view-post/admin-view-post.component';
import { AdminAddPostComponent } from './admin/admin-add-post/admin-add-post.component';

export const routes: Routes = [
    {
        path: 'admin/posts',
        component: AdminPostsComponent
    },
    {
        path: 'admin/posts/add',
        component: AdminAddPostComponent
    },
    {
        path: 'admin/posts/:id',
        component: AdminViewPostComponent
    }

];

