import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizViewComponent } from './quiz/quiz-view/quiz-view.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./quiz/quiz.module').then(m=>m.QuizModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
