import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ApirequestComponent } from './apirequest/apirequest.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'xyz',
    component:DataComponent
  },

  {
    path:'apirequest',
    component:ApirequestComponent
  },
  {
    path:'student-list',
    component: StudentComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
