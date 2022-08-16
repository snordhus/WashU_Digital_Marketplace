//login.component.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines loginUser() which calls UserService.findByUsernam()) to potentially log-in the user

import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };
  username = '';
  //contains all existing users for potential future reference
  users?: User[];

  submitted = false;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  loginUser(): void {
      //findByUsername defined in user.service.ts
      this.userService.findByUsername(this.username)
        .subscribe({
          next: (data) => {
            this.users = data;
            console.log("login data:");
            console.log(data);
            console.log(data[1].username);
            for(let i=0; i<data.length; i++){
              if(data[i].username == this.user.username && data[i].password == this.user.password){
                console.log("SUCCESS?");
                //Like PHP SESSION variable, user is considered logged in
                const temp: string = this.user.username!;
                localStorage.setItem('currentUser',temp);
                console.log(localStorage.getItem('currentUser'));
                this.submitted = true;
                return;
              }
            }
            window.alert("User does not exist / Incorrect Password");
          },
          error: (e) => console.error(e)
        });
  }
}


