import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../state.service';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  URL='http://localhost:8081';

  constructor(private http: HttpClient , private stateService:StateService) { }

  addBlog(blog: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(`${this.URL}/blog/addBlog`, blog);
  }

  getAllBlog(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${this.URL}/blog/getAllBlog`);
  }

  getBlogById(id: number): Observable<IBlog> {
    return this.http.get<IBlog>(`${this.URL}/blog/getBlogById/${id}`);
  }
  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/blog/deleteBlog/${id}`);
  }


  countAllBlogs(): Observable<number> {
    return this.http.get<number>(`${this.URL}/blog/countAllBlogs`);
  }

  countAllLikesInAllBlogs(): Observable<number> {
    return this.http.get<number>(`${this.URL}/blog/countAllLikesInAllBlogs`);
  }

  countAllDislikeInAllBlogs(): Observable<number> {
    return this.http.get<number>(`${this.URL}/blog/countAllDislikeInAllBlogs`);
  }

  countAllCommentsInAllBlogs(): Observable<number> {
    return this.http.get<number>(`${this.URL}/blog/countAllCommentsInAllBlogs`);
  }

}
