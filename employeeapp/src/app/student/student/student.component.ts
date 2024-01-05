import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private router: Router) {}
  userName = sessionStorage.getItem('Name');

  employee: any[] = [
    {
      id: '123',
      name: 'Jone-Don',
      email: 'jon-don@gmail.com',
      phone: '015',
      salary: 80000,
      department: 'Accounts'
    },
    {
      id: '124',
      name: 'Alice',
      email: 'Alice@gmail.com',
      phone: '017',
      salary: 50000,
      department: 'Sales'
    },
    {
      id: '134',
      name: 'Boob',
      email: 'Boob@gmail.com',
      phone: '018',
      salary: 70000,
      department: 'HR'
    },
    {
      id: '144',
      name: 'Monaem Khan',
      email: 'b@gmail.com',
      phone: '018',
      salary: 70000,
      department: 'Programmer'
    }
  ];

    LogOut(){
        sessionStorage.setItem("Name","");
        this.router.navigate(['']);    
      }
  
 
}

