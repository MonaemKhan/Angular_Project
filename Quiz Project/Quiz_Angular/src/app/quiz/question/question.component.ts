import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../ServeforQuiz/quiz-service.service';
import { QuestionServiceService } from '../ServeforQuiz/question-service.service';
import { Quiz } from 'src/app/Models/Quiz.Model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  AllQuiz: any[] = [];
  _QuizName: string = '';
  _QuizId: number = 0;
  IsQuizPartShow = true;
  QuestionForm: any;
  RightAnswer: any[] = [];
  AllQuestion: any[] = [];
  isEdit: boolean = false;
  index: number = 0;
  ShowDataEntry: boolean = false;

  constructor(private Quizservice: QuizServiceService, private fb: FormBuilder, private QuestionService: QuestionServiceService) { }

  ngOnInit(): void {
    //getallquizname
    this.Quizservice.getAllQuiz().subscribe(
      {
        next: (re) => {
          // console.log(re);
          this.AllQuiz = re;
          // console.log(this.AllQuiz);          
        },
        error: (er) => {
          console.log(er);
        }
      }
    );

    this.QuestionForm = this.fb.group({
      QuestionId: 0,
      QuestionName: ['', Validators.required],
      Option1: ['', Validators.required],
      Option2: ['', Validators.required],
      Option3: ['', Validators.required],
      Option4: ['', Validators.required],
      Right_Answer: ['', Validators.required],
      Mark: 0,
      QuizId: 0
    });
  }

  QuizIdNameSlect(selectElement: HTMLSelectElement): void {
    const selectedValue = selectElement.value;
    const selectedOptionText = selectElement.options[selectElement.selectedIndex].text;

    this._QuizId = parseInt(selectedValue);
    this._QuizName = selectedOptionText
    console.log('Selected Value: ', this._QuizId);
    console.log('Selected Option Text: ', this._QuizName);
    this.ShowDataEntry = true;
  }

  QuizOptionClick() {

  }

  AddtoQuiz() {
    this.IsQuizPartShow = false;
  }

  AddQuiz() {
    this.IsQuizPartShow = true;
    // console.log(this._QuizName)
    this.Quizservice.postQuiz({
      QuizId: this._QuizId,
      QuizName: this._QuizName,
    }).subscribe({
      next: (re) => {
        // console.log(re);
        this.AllQuiz.push(re);
      },
      error: (er) => {
        console.log(er);
      }
    });
  }

  BackofQuiz() {
    this.IsQuizPartShow = true;
  }

  pushToRightAnswer() {
    // console.log('click');
    this.RightAnswer = [];
    if (this.QuestionForm.value.Option1 !== '') {
      this.RightAnswer.push(this.QuestionForm.value.Option1);
    }
    if (this.QuestionForm.value.Option2 !== '') {
      this.RightAnswer.push(this.QuestionForm.value.Option2);
    }
    if (this.QuestionForm.value.Option3 !== '') {
      this.RightAnswer.push(this.QuestionForm.value.Option3);
    }
    if (this.QuestionForm.value.Option4 !== '') {
      this.RightAnswer.push(this.QuestionForm.value.Option4);
    }
  }

  EditItem(data: any) {
    this.QuestionForm.patchValue(data);
    this.index = this.AllQuestion.indexOf(data);
    this.isEdit = true;
  }

  saveEditData() {
    this.AllQuestion[this.index] = this.QuestionForm.value;
    this.QuestionForm.reset();
    this.isEdit = false;
  }

  DeleteItem(data: any) {
    const indexToRemove = this.AllQuestion.indexOf(data);
    console.log(indexToRemove);
    if (indexToRemove !== -1) {
      this.AllQuestion.splice(indexToRemove, 1);
    }

  }

  QuestionformSubmit() {
    if (!this.QuestionForm.invalid && this.QuestionForm.value.Mark > 0) {
      console.log(this._QuizId);
      this.QuestionForm.value.QuizId = this._QuizId,
        this.QuestionForm.value.QuestionId = 0;
      this.AllQuestion.push(this.QuestionForm.value);
      console.log(this.AllQuestion);
      this.QuestionForm.reset();
    } else {
      console.log("Invalid");
    }
  }

  PostData():void {
    for (let item of this.AllQuestion) {
      console.log(item);
      
      // item.Mark = parseInt(item.Mark);
      this.QuestionService.postQuestion(item).subscribe(
        {
          next: (re) => {
            console.log(re);
            this.AllQuestion = [];
          },
          error: (er) => {
            console.log(er);
          }
        }
      );
    }
  }

}
