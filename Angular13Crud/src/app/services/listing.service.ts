//listing.service.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines methods called by listing-related components to create/read/update/delete data in 'listings' mySQL table

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../models/listing.model';
const baseUrl = 'http://localhost:8080/api/listings';
@Injectable({
  providedIn: 'root'
})
export class ListingService {
  constructor(private http: HttpClient) { }
  findByTitle(title: any): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${baseUrl}?title=${title}`);
  }
  create(data: any): Observable<any> {
    console.log("IN LISTING_CREATE");
    console.log(data);
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<Listing[]> {
    return this.http.get<Listing[]>(baseUrl);
  }
  get(id: any): Observable<Listing> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  
  
  
}
