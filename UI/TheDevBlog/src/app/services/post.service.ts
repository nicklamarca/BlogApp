import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { UpdatePostRequest } from '../models/update-post.model';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiBaseUrl + '/api/posts');
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiBaseUrl + '/api/posts/' + id);
  }

  updatePost(id:string | undefined, updatePostRequest: UpdatePostRequest): Observable<Post>{
    return this.http.put<Post>(this.apiBaseUrl + '/api/posts/' + id, updatePostRequest);
  }


}

