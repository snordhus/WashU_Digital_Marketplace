module.exports = (sequelize, Sequelize) => {
    const Listing = sequelize.define("listing", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      seller: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      purchased: {
        type: Sequelize.BOOLEAN
      }
    });
    return Listing;
  };