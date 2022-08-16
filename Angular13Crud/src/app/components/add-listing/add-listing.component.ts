//add-listing.component.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines methods for creating listing in 'listings' mySQL table

import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing.model';
import { ListingService } from '../../services/listing.service';
@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  curUser:string = localStorage.getItem('currentUser')!;
  listing: Listing = {
    title: '',
    description: '',
    category: '',
    seller: this.curUser,
    price: 0.00,
    image: '',
    purchased: false
  };
  submitted = false;
  constructor(private listingService: ListingService) { }
  ngOnInit(): void {
  }
  newListing(): void {
    this.submitted = false;
    this.listing = {
      title: '',
      description: '',
      category: '',
      seller: '',
      image: '',
      price: 0.00,
      purchased: false
    };
  }
  saveListing(): void {
    const data = {
      title: this.listing.title,
      description: this.listing.description,
      category: this.listing.category,
      seller: this.listing.seller,
      price: this.listing.price,
      image: this.listing.image
    };
    this.listingService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  
}
