//listings-list.component.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//retrieves all listings on 'View Listings' page. Has filter options and tracks an active listing

import { Component, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing.model';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  templateUrl: './listings-list.component.html',
  selector: 'app-listings-list',
  styleUrls: ['./listings-list.component.css']
})
export class ListingsListComponent implements OnInit {
  listings?: Listing[];
  currentListing: Listing = {};
  currentIndex = -1;
  title = '';
  curUser = localStorage.getItem('currentUser');
  catFilter = "All";
  constructor(private listingService: ListingService) { }
  ngOnInit(): void {
    this.retrieveListings();
  }
  //for admin user only
  removeAllListings(): void {
    this.listingService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  setActiveListing(listing: Listing, index: number): void {
    this.currentListing = listing;
    this.currentIndex = index;
  }
  searchTitle(): void {
    this.currentListing = {};
    this.currentIndex = -1;
    this.listingService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.listings = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveListings();
    this.currentListing = {};
    this.currentIndex = -1;
  }
  retrieveListings(): void {
    this.listingService.getAll()
      .subscribe({
        next: (data) => {
          this.listings = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  filter(x:string): void {
    this.catFilter = x;
  }
  
  
  
}
