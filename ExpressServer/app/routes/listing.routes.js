module.exports = app => {
    const listings = require("../controllers/listing.controller.js");
    var router = require("express").Router();
    // Create listing
    router.post("/", listings.create);
    // Delete listing by id
    router.delete("/:id", listings.delete);
    // Delete all Listings
    router.delete("/", listings.deleteAll);
    // get all
    router.get("/", listings.findAll);
    // get purchased
    router.get("/purchased", listings.findAllPurchased);
    // get one Listing by id
    router.get("/:id", listings.findOne);
    // update by id
    router.put("/:id", listings.update);
    
    app.use('/api/listings', router);
  };