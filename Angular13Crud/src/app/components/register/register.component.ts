//register.component.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines saveUser() which registers/creates a user in the 'users' mySQL table

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: ''
  };
  submitted = false;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      email: this.user.email
    };
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log("SUCCESS?");
          //Like PHP SESSION variable, user is considered logged in
          localStorage.setItem('currentUser', res.username);
          console.log(localStorage.getItem('currentUser'));

          this.submitted = true;
        },
        error: (e) => {
          console.error(e);
        }
      });
  }
}

