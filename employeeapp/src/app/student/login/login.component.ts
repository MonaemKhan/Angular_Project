import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../service/request.service';
import { SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform?: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private requestService: RequestService) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  formvaluecontrol(a) {
    return this.loginform.get(a);
  }

  datasubmit() {
    var verifyEmail = this.loginform.value.email;
    var verifyPassword = this.loginform.value.password;

    if (verifyEmail === "b@gmail.com" && verifyPassword === "12345") {
      const access = 10;
      this.requestService.setAccess(access);
      sessionStorage.setItem("Name","Monaem Khan");      
      this.router.navigate(['/student-list']); // Navigate to another component
    }else if (verifyEmail === "SuperAdmin@gmail.com" && verifyPassword === "12345") {
      const access = 10;
      this.requestService.setAccess(access);
      sessionStorage.setItem("Name","Super Admin");      
      this.router.navigate(['/student-list']); // Navigate to another component
    } else {
      console.log('Form values are not proper');
    }
  }
}
