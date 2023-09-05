import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './question/question.component';
import { QuizServiceService } from './ServeforQuiz/quiz-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuestionServiceService } from './ServeforQuiz/question-service.service';
import { QuizViewComponent } from './quiz-view/quiz-view.component';
import { QuizQuestionServiceService } from './ServeforQuiz/quiz-question-service.service';
import { QuestionViewComponent } from './question-view/question-view.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';


@NgModule({
  declarations: [
    QuestionComponent,
    QuizViewComponent,
    QuestionViewComponent,
    EditQuestionComponent,
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
    QuestionServiceService,
    QuizQuestionServiceService
  ]
})
export class QuizModule { }
