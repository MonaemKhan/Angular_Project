import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './question/question.component';
import { QuizServiceService } from './ServeforQuiz/quiz-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionServiceService } from './ServeforQuiz/question-service.service';


@NgModule({
  declarations: [
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuizServiceService,
    QuestionServiceService
  ]
})
export class QuizModule { }
