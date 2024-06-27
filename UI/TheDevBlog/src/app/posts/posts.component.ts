import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  constructor(private postService: PostService){}

  posts: Post[] = [];


   ngOnInit(): void {
    this.postService.getAllPosts().subscribe((response) => {
      this.posts = response;
    });
   }

   
}
