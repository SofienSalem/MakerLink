import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IBlog } from 'src/app/_interfaces/IBlog';
import { BlogService } from 'src/app/_services/_Apps/blog.service';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: IBlog[] = [];
  paginatedBlogs: IBlog[] = [];
  currentPage: number = 1;
  pageSize: number = 6; // Nombre de blogs par page



  constructor(      private toastr: ToastrService,
    private  blogservice: BlogService,
    private stateService: StateService,

  ) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogservice.getAllBlog().subscribe({
      next: (data) => {
        this.blogs = data;
        this.setPage(1); // Démarrez la pagination à la première page
      },
      error: (err) => console.error(err)
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedBlogs = this.blogs.slice(startIndex, startIndex + this.pageSize);
  }

  safePost(post: string | undefined): string {
    // Fournit une chaîne vide si post est undefined
    return post ? post : '';
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.blogs.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  
  getTotalPages(): number {
    return Math.ceil(this.blogs.length / this.pageSize);
  }
  


}
