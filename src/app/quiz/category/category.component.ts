import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categories: any[] = this.categoryService.categories;
  filteredCategories: any[] = this.categoryService.categories;
  searchForm!: FormGroup;
  questionOfCategory: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private quizService: QuizService,
    private router: Router
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
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  reset(): void {
    console.log(this.categories);
    this.filteredCategories = this.categories;
  }
  getQuizzByCategory(categoryId: number) {
    this.questionOfCategory = this.quizService.getQuizContent(categoryId);
    console.log(this.questionOfCategory);
    this.router.navigate(['/quiz'], {
      queryParams: { idCategory: categoryId },
    });
  }
}
