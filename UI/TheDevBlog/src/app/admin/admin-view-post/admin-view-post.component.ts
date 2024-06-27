import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@Component({
  selector: 'app-admin-view-post',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './admin-view-post.component.html',
  styleUrl: './admin-view-post.component.css'

})
export class AdminViewPostComponent {

  constructor(private route: ActivatedRoute, private postService: PostService){}
   
  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
  
      if (id) {
        this.postService.getPostById(id).subscribe((response) => {
          this.post = response;
        }); 
      }
    });
  }
}

