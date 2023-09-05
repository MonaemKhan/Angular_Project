import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from '../ServeforQuiz/question-service.service';
import { QuizServiceService } from '../ServeforQuiz/quiz-service.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  QuestionForm: any;
  QuizForm: any;
  RightAnswer: any[] = [];
  allquizList: any;
  quizIdtoroute:number=0;

  constructor(private fb: FormBuilder,
    private route_id: ActivatedRoute,
    private questionService: QuestionServiceService,
    private quizService: QuizServiceService,
    private route:Router) { }

  ngOnInit(): void {
    this.QuestionForm = this.fb.group({
      questionId: 0,
      questionName: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      right_Answer: ['', Validators.required],
      mark: 0,
      quizId: 0
    });

    this.QuizForm = this.fb.group({
      quizId: ['', Validators.required],
      quizName: ['']
    });

    //questionId
    this.route_id.paramMap.subscribe({
      next: (re) => {
        const id = re.get('QuestionId');
        if (id) {
          this.questionService.getQuestion(parseInt(id)).subscribe({
            next: (re) => {
              this.QuestionForm.patchValue(re);
              this.RightAnswer = [];
              if (this.QuestionForm.value.option1 !== '') {
                this.RightAnswer.push(this.QuestionForm.value.option1);
              }
              if (this.QuestionForm.value.option2 !== '') {
                this.RightAnswer.push(this.QuestionForm.value.option2);
              }
              if (this.QuestionForm.value.option3 !== '') {
                this.RightAnswer.push(this.QuestionForm.value.option3);
              }
              if (this.QuestionForm.value.option4 !== '') {
                this.RightAnswer.push(this.QuestionForm.value.option4);
              }
              // console.log(this.QuestionForm.value);
            },
            error: (er) => {
              console.log(er);
            }
          });
        }
      },
      error: (er) => {
        console.log(er);
      }
    });

    //quizId
    this.route_id.paramMap.subscribe({
      next: (re) => {
        const id = re.get('QuizId');
        if (id) {
          this.quizIdtoroute = parseInt(id);
          this.quizService.getQuiz(parseInt(id)).subscribe({
            next: (re) => {
              // console.log(re);
              this.QuizForm.patchValue(re);
              // console.log(this.QuizForm.value);
            },
            error: (er) => {
              console.log(er);
            }
          });
        }
      },
      error: (er) => {
        console.log(er);
      }
    });

    this.quizService.getAllQuiz().subscribe({
      next: (re) => {
        this.allquizList = re;
        // console.log(this.allquizList);
      },
      error: (er) => {
        console.log(er);
      }
    });
  }

  pushrightAnswer() {
    this.RightAnswer = [];
    this.RightAnswer.push(this.QuestionForm.value.option1);
    if (this.QuestionForm.value.Option2 !== ' ') {
      this.RightAnswer.push(this.QuestionForm.value.option2);
    }
    if (this.QuestionForm.value.Option3 !== ' ') {
      this.RightAnswer.push(this.QuestionForm.value.option3);
    }
    if (this.QuestionForm.value.Option4 !== ' ') {
      this.RightAnswer.push(this.QuestionForm.value.option4);
    }
  }

  updateQuestion() {
    this.QuestionForm.value.quizId = this.QuizForm.value.quizId;
    // console.log(this.QuestionForm.value);
    // console.log(this.QuizForm.value);
    this.questionService.putQuestion(this.QuestionForm.value.questionId,this.QuestionForm.value).subscribe({
      next: (re)=>{
        // console.log('responce back');        
        // console.log(re); 
        this.route.navigate(['QuizView']);
      },
      error: (er)=>{
        console.log(er);        
      }
    });
  }

  deleteQuestion() {
    this.questionService.deleteQuestion(this.QuestionForm.value.questionId).subscribe({
      next: (re)=>{
        this.route.navigate(['QuizView']);
      },
      error: (er)=>{
        console.log(er);        
      }
    });
  }

  backtopage(){
    console.log(this.quizIdtoroute);
    this.route.navigate(['/questionView',this.quizIdtoroute]);
  }
}
