import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  loginform?: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.loginform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  formvaluecontrol(a) {
    return this.loginform.get(a);
  }

  datasubmit() {
    var verifyName = this.loginform.value.name;

    // Your form validation logic goes here
    // For example, you can check if verifyName meets certain conditions

    if (verifyName == "bashar") {
      // If the form values are proper, navigate to another component
      this.router.navigate(['/home']); // Replace 'other-component' with the actual route path
    } else {
      // Handle the case where the form values are not proper
      console.log('Form values are not proper');
    }
    console.log(this.loginform.value);
  }

}


