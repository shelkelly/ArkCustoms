// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var store = {
  all: function(cb) {
    orm.all("retail", function(res) {
      cb(res);
    });
  },
//PRODUCT PAGE
  select: function(newID, cb) {
    orm.select(newID, function(res) {
      cb(res);
    });
  },

  //CART PAGE
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("customsubmission", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = store;