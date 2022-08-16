//db.config.js
//author: Sam Nordhus, github: snordhus, snordhus@wustl.edu
//edit this file to configure your localhost mySQL server

module.exports = {
    HOST: "localhost",
    PORT: 3306,
    USER: "snordhus",
    PASSWORD: "123456",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };