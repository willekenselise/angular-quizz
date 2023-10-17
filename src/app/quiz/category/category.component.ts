import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categories: any[] = this.categoryService.categories;
  filteredCategories: any[] = this.categoryService.categories;
  searchForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.searchForm = this.fb.group({
      search: [''],
    });
  }
  search(): void {
    const { search } = this.searchForm.value;
    if (search) {
      this.filteredCategories = this.categories.filter((c) =>
        this.normalizeString(c.name).includes(this.normalizeString(search))
      );
    }
  }
  
  normalizeString(input: string): string {
    return input
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "") 
      .toLowerCase();
  } 

  reset(): void {
    console.log(this.categories);
   this.filteredCategories = this.categories;
  }
}
