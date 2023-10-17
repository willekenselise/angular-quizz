import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = [];
  idCategory: number = 0;

  constructor(private quizService: QuizService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.idCategory = params['idCategory'];
        console.log(this.idCategory)
      }
    });
    this.quizContent = this.quizService.getQuizContent(this.idCategory);
  }
}
