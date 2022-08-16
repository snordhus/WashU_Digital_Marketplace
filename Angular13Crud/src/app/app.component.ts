import { Component, OnInit } from '@angular/core';
//uses localStorage var: currentUser like pHp session variable
localStorage.setItem('currentUser', 'none');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular13Crud';
  curUser = localStorage.getItem('currentUser');

  ngOnInit(): void {
  }
}

