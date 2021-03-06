// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/index.html"));
  });

  app.get("/product", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/product.html"));
  });

  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/cart.html"));
  })

  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/checkout.html"));
  })
  app.get("/cancel", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/cancel.html"));
  })
  app.get("/success", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/success.html"));
  })
  app.get("/cancel", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/html/cancel.html"));
  })
  

  // If no matching route is found default to home
//  app.get("*", function(req, res) {
//    res.sendFile(path.join(__dirname, "../public/404page"));
//  });
};
