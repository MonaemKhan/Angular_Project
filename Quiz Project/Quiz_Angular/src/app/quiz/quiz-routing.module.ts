import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component';
import { QuestionViewComponent } from './question-view/question-view.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';

const routes: Routes = [
  {
    path:'addquestion',
    component:QuestionComponent
  },
  {
    path:'QuizView',
    component: QuizViewComponent
  },
  {
    path:'questionView/:Id',
    component:QuestionViewComponent
  },
  {
    path:'editquestion/:QuestionId/:QuizId',
    component:EditQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
