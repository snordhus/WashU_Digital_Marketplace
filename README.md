# WashU Digital Marketplace
Sam Nordhus - snordhus<br>
Asynchronous marketplace website where WashU students can sell items to other students <br><br>
CRUD Application: Create, Read, Update, Delete database entries
## Usage Instructions / Other Information:
* Stack:
     * Angular13 frontend 
     * Express(node.js) backend
     * mySQL (with sequelize ORM) database 
* clone repo, open terminal, cd into repo, and run the following ccommand to install dependencies:
    * npm install express sequelize mysql2 cors --save 
* Defaultly, Express server is on localhost port 8080, Angular is on 8081, and mySQL is on port 3306
* To configure default database properties, go to ExpressServer/app/config/db.config.js
    * You will need to create a mySQL database (testdb) with the specified user (snordhus) listening on the specified port (3306)
### To Launch App Locally:
* On one terminal, cd to /ExpressServer and run:
    * node server.js
* On another terminal, cd to /Angular13Crud and run:
    * ng serve --port 8081  
* Site should be accessible on http://localhost:8081/
* Make sure mySQL database is created

# RUBRIC:
### Rubric turned in on time (5 points)
### Languages/Frameworks used (20 points)
* 10 - Learned/Used Angular frontend
* 10 - Learned/Used Express (node.js) backend
* 0 - MySQL Database
### Functionality (50 points)
* 5 Users can create an item for sale listing that will appear for all users
* 10 Users can press a button to email the seller with an offer/bid for the selected listing, and the listing will be marked as purchased
* 5 posts have a category and can be filtered by category
* 10 Users can register, login, and logout
* 10 Logged in users can edit and delete their listings
* 10 Database contains:
    * Table users: username (primary), password, email, 
    * Table listings: seller (secondary), title, category, description, price, listing_id (primary)
### Best Practices (5 points)
* 3 Code is readable and well formatted
* 2 All pages pass the html validator
### Creative Portion (20 points)
* Learned/used new database ORM technology: 'sequelize'
* Site is mobile friendly:
    * CSS Media Queries
    * Bootstrap
* Can log in as an admin to edit/delete all listings.  Admin has a 'delete-all' button at the bottom of the listings list
    *  username: admin
    *  password: admin_password
* Added working searchbar
* Users can also upload an image that's displayed as a thumbnail in the list and as a larger image when selected
    * Added 'image' column to lisings table
* Styling:
   * site is visually appealing
   * Buttons animated
   * listing-details is 'sticky' (always visible) 
  
