import { Component, OnInit } from '@angular/core';
import { QuizQuestionServiceService } from '../ServeforQuiz/quiz-question-service.service';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  quiz_details:any[]=[];


  constructor(private Quiz_Question:QuizQuestionServiceService){}

  ngOnInit(): void {
    this.Quiz_Question.GetAllQuizDetails().subscribe({
      next: (re)=>{
        this.quiz_details = re;
        // console.log(this.quiz_details)
      },
      error: (er)=>{
        console.log(er);
      }
    });
  }
}
