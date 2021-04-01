var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var store = require("../models/store.js");

// Create all our routes and set up logic within those routes where required.
router.get("/catalogue", function (req, res) {
  store.all(function (data) {
    var hbsObject = {
      retail: data
    };
    console.log(hbsObject);

    res.render("index", hbsObject);
  });
});

router.get("/product/:id", function (req, res) {

  var id = req.params.id
  var newID = id.replace(":", "");
  var condition = " id IN ('" + newID + "');"

  store.select(condition, function (data) {


    var hbsObject = {
      product: data
    };

    console.log(hbsObject);
    res.render("product", hbsObject);
    console.log("hello from the controller select one.")
  });
});

router.post("/cart", function (req, res) {

  var body = req.body;
  console.log(body)

 // itemsID = $('.portfolio-item').attr('data-id');
//  console.log(itemsID)

 // productName = $('h4#productName').text();
 // console.log(productName);

  store.create(["id", "product", "customtext", "customfont", "optiontype", "engravingimg"], [req.body.id, req.body.product, req.body.customtext, req.body.customfont, req.body.customoption, req.body.customimg], function (result) {

    console.log(result)

    var hbsObject = {
      cartitem: result
    };
    console.log(hbsObject);
    res.render("cart", hbsObject)
  });
});

router.put("/api/cats/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;