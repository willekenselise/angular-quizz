import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  playerName: string = 'non';

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.route.params.subscribe((params) => {
      this.playerName = params['playerName'];
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
    this.filteredCategories = this.categories;
  }

  getQuizzByCategory(categoryId: number) {
    this.questionOfCategory = this.quizService.getQuizContent(categoryId);
    this.router.navigate(['/quiz', this.playerName, categoryId]);
  }
}
