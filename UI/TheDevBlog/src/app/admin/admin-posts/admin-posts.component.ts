import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-posts',
  standalone: true,
  imports: [],
  templateUrl: './admin-posts.component.html',
  styleUrl: './admin-posts.component.css'
})
export class AdminPostsComponent implements OnInit {
   
  constructor(private postService: PostService){}

   ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      console.log(posts);
    });
   }

}
