//listings-details.component.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//depends on 'currentListing' member from listings-list
//defines relevant methods for viewing/editing/deleting/purchasing listings

import { Component, Input, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/listing.service';
//UserService needed for getEmail()
import { UserService } from 'src/app/services/user.service';
import { Listing } from 'src/app/models/listing.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  curUser = localStorage.getItem('currentUser');
  @Input() viewMode = false;

  @Input() currentListing: Listing = {
    title: '',
    description: '',
    category: '',
    seller: '',
    image: '',
    price: 0.00,
    purchased: false
  };
  message = '';
  email = 'none';
  lastPurchased = '';
  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getListing(this.route.snapshot.params["id"]);
    }
  }
  //mark listing as purchased
  updatePurchased(status: boolean): void {
    const data = {
      title: this.currentListing.title,
      description: this.currentListing.description,
      category: this.currentListing.category,
      price: this.currentListing.price,
      seller: this.currentListing.seller,
      image: this.currentListing.image,
      purchased: status
    };

    this.message = '';

    this.listingService.update(this.currentListing.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentListing.purchased = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
          this.getEmail(this.currentListing.seller, this.currentListing.title);
        },
        error: (e) => console.error(e)
      });
  }
  async getEmail(x:any, tit:any){
      this.userService.findByUsername(x)
        .subscribe({
          next: (data) => {
            console.log("login data:");
            console.log(data);
            for(let i=0; i<data.length; i++){
              if(data[i].username == x){
                
                console.log("getEmail"+data[i].username + data[i].email +" SUCCESS?");
                this.email = data[i].email!;
                this.lastPurchased = tit;
                return;
              }
            }
            window.alert("User does not exist / Incorrect Password");
            return "err1";
          },
          error: (e) => console.error(e)
        });
    return;
  }

  updateListing(): void {
    this.message = '';

    this.listingService.update(this.currentListing.id, this.currentListing)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This listing was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteListing(): void {
    this.listingService.delete(this.currentListing.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/listings']);
        },
        error: (e) => console.error(e)
      });
  }
  getListing(id: string): void {
    this.listingService.get(id)
      .subscribe({
        next: (data) => {
          this.currentListing = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

