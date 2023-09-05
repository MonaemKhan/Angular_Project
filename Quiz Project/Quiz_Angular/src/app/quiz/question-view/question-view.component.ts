import { Component, OnInit } from '@angular/core';
import { QuizQuestionServiceService } from '../ServeforQuiz/quiz-question-service.service';
import { QuestionServiceService } from '../ServeforQuiz/question-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {
  Question_Details:any[] = [];
  quizName:string = '';
  quizNumber:number = 0;
  quizQuestion: number = 0;
  id:any;
  hasdata:boolean = true;

  constructor(private Quiz_Question: QuizQuestionServiceService,
    private Question: QuestionServiceService, 
    private route_data: ActivatedRoute) { }

  ngOnInit(): void {

    this.route_data.paramMap.subscribe({
      next: (re)=>{
        const Id = re.get('Id');
        if(Id){
          this.Quiz_Question.GetQuizDetails(parseInt(Id)).subscribe({
            next: (re)=>{
              this.quizName=re[0].quizName
              this.quizNumber=re[0].number
              this.quizQuestion=re[0].total_Question
              // console.log(re)
            },
            error: (er)=>{
              console.log(er);
            }
          });

          this.Quiz_Question.GetQuestionDetails(parseInt(Id)).subscribe({
            next: (re)=>{
              if(re.length === 0){
                console.log('null');
                this.hasdata = false;              
              }else{
                this.Question_Details = re;
              }
              // console.log(re)
            },
            error: (er)=>{
              console.log(er);
            }
          });

        }
      }
    });
  }
}
