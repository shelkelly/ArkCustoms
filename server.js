var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

const stripe = require('stripe')('sk_test_51IgyxfJXUNR7kFRIj2lnSa87KzXk9hoP8tNl7gpwEwr1p0WHEDy7HuUUgW0ze5GQwASOw2bwG0pFxykFUDaiEYh600p25Qq5S6');

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });

  res.json({ id: session.id });
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("views"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/storeController.js");
app.use(router);

//HTML VIEWS
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
