import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@Component({
  selector: 'app-admin-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './admin-posts.component.html',
  styleUrl: './admin-posts.component.css'

})
export class AdminPostsComponent implements OnInit {
   
  constructor(private postService: PostService){}

  posts: Post[] = [];

   ngOnInit(): void {
    this.postService.getAllPosts().subscribe((response) => {
      this.posts = response;
    });
   }

}
