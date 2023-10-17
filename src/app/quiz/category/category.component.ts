import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: any[] = this.categoryService.categories;
  searchForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
     ) { }

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.searchForm = this.fb.group({
      search: [''],
    });
  }

  search (){
    console.log("search")
   }
}


