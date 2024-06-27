import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { UpdatePostRequest } from '../../models/update-post.model';


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

  onSubmit():void{
   
    const updatePostRequest: UpdatePostRequest = {
      author: this.post?.author,
      content: this.post?.content,
      featuredImageUrl: this.post?.featuredImageUrl,
      publishDate: this.post?.publishDate,
      updatedDate: this.post?.updatedDate,
      visible: this.post?.visible,
      summary: this.post?.summary,     
      title: this.post?.title,      
      urlHandle: this.post?.urlHandle,      
    }

    this.postService.updatePost(this.post?.id, updatePostRequest).subscribe((response) => {
      alert('Post updated successfully');
    });
  }

  deletePost(): void{
    this.postService.deletePost(this.post?.id).subscribe((response) => {
      alert('Deleted successfully');
    });
  }

}

