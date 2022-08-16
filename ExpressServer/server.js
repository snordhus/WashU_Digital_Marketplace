//server.js
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//run this file to initialize/run express backend server that communicates with Angular13 frontend

//Template/resource used to connect angular frontend with express/mySql(sequelize) backend:
// https://www.bezkoder.com/angular-13-node-js-express-mysql/

const cors = require("cors");
const express = require("express");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to washU dig mktplace." });
});
require("./app/routes/listing.routes")(app);
require("./app/routes/user.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});