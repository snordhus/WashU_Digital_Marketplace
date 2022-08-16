//logout.component.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines logout() which logs out the user and resets the localStorate 'currentUser' variable

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
  curUser = localStorage.getItem('currentUser');
  constructor() { }

  ngOnInit(): void {
    console.log("inside logout");
  }
  logout(): void {
    this.curUser = 'none';
    localStorage.setItem('currentUser', 'none');
  }
}
