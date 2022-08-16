//Template/resource used to connect angular frontend with express/mySql(sequelize) backend:
// https://www.bezkoder.com/angular-13-node-js-express-mysql/

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.listings = require("./listing.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
module.exports = db;