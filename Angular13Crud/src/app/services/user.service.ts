//user.service.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines methods called by login/register components to interact with 'users' mySQL table

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
const baseUrl = 'http://localhost:8080/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  update(username: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${username}`, data);
  } 
  create(data: any): Observable<any> {
    console.log("HERE IS ERROR");
    console.log(data);
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }
  get(username: any): Observable<User> {
    return this.http.get(`${baseUrl}/${username}`);
  }
  findByUsername(username: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?username=${username}`);
  }
  //Unused method, but good for reference
  delete(username: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${username}`);
  }
}

