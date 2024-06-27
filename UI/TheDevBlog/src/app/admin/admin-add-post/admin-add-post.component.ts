import { Component } from '@angular/core';
import { AddPostRequest } from '../../models/add-post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-add-post',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-add-post.component.html',
  styleUrl: './admin-add-post.component.css'
})
export class AdminAddPostComponent {

  constructor(private postService: PostService){}

  post: AddPostRequest = {
    author: '',
    content: '',
    featuredImageUrl: '',
    publishDate: '',
    updatedDate: '',
    visible: false,
    summary: '',     
    title: '',      
    urlHandle: ''    
  }

  onSubmit() :void{
    this.postService.addPost(this.post).subscribe((response) => {
      alert('Post added successfully');
    });
  }

}
