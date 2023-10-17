import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[] = [];
  searchString: string = "";

  constructor(private http: HttpClient) { }


  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe((cat: any) => {
        this.categories.push(...cat);
    });
  }

}
