import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[] = [];

  constructor(private http: HttpClient) { }


  getQuizCategories() {
    this.http.get('http://localhost:3000/categories').subscribe((cat: any) => {
        console.log(cat);
    });
  }

}
