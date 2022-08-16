//listing.model.ts
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//defines user class variables passed to create a new listing in the mySQL table

//imported into listing-related components

export class Listing {
    id?: any;
    title?: string;
    description?: string;
    category?: string;
    price?: any;
    seller?: string;
    image?: string;
    sellerEmail?: string;
    purchased?: boolean;
  }
