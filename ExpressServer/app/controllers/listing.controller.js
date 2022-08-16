const db = require("../models");
const Op = db.Sequelize.Op;
const Listing = db.listings;

// called from a post http request in client, create a listing
exports.create = (req, res) => {
  // Before creation, first validate body of req
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // create listing
  const listing = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    seller: req.body.seller,
    image: req.body.image,
    purchased: req.body.purchased ? req.body.purchased : false
  };

  // save in database
  Listing.create(listing)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Listing."
      });
    });
};

// Delete all Listings
exports.deleteAll = (req, res) => {
  Listing.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Listings were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all listings."
      });
    });
};
// Delete a Listing with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Listing.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listing was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Listing with id=${id}. Maybe Listing was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Listing with id=" + id
      });
    });
};
// update listing by id
exports.update = (req, res) => {
  const id = req.params.id;

  Listing.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Listing was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Listing with id=${id}. Maybe Listing was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Listing with id=" + id
      });
    });
};
// Find one Listing by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Listing.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Listing with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Listing with id=" + id
      });
    });
};
// get all listings in table
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Listing.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ERROR, was not able to retriev listings."
      });
    });
};
// TO REMOVE
exports.findAllPurchased = (req, res) => {
  Listing.findAll({ where: { purchased: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving listings."
      });
    });
};