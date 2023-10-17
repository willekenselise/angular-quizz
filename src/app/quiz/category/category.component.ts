import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: any[] = this.categoryService.categories;

  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.categoryService.getCategories();
  }
}


