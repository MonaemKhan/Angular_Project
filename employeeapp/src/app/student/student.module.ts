import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { DataComponent } from './data/data.component';

import { StudentComponent } from './student/student.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApirequestComponent } from './apirequest/apirequest.component';
import {HttpClientModule} from '@angular/common/http'
import { RequestService } from './service/request.service';
import { LoginComponent } from './login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';




@NgModule({
  declarations: [
    DataComponent,
    StudentComponent,
    FormsComponent,
    ApirequestComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule,
    

  ],
  providers:[RequestService]
})
export class StudentModule { }
