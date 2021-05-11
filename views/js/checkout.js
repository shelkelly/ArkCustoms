const stripe = require('stripe')('sk_test_51IgyxfJXUNR7kFRIj2lnSa87KzXk9hoP8tNl7gpwEwr1p0WHEDy7HuUUgW0ze5GQwASOw2bwG0pFxykFUDaiEYh600p25Qq5S6');

const session = await stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
  payment_method_types: ['card'],
  line_items: [
    {price: 'price_1IkfFJJXUNR7kFRIyR5g0qdb', quantity: 2},
  ],
  mode: 'payment',
});

console.log(session)