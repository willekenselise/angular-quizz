import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: any[] = this.CategoryService.categories;

  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.CategoryService.getQuizContent();
  }
}
