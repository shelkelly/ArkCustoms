

var cartitem = [];
var cartCount = 0;
var cartlist = document.querySelector("#cartlist");
var portfolioCaption = document.querySelector(".portfolio-caption");
var rfc = document.querySelector(".rfc");
var entireCart = [];
var checkoutItems = [];

renderCartItems();
sumCart();

//$("#checkout-button").on("click", function () {
//  checkout();
//});

$("#cartContainer").on("click", function (event) {
  console.log('clicky')
  var element = event.target;

  // If that element is a button...
  if (element.matches(".rfc") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("cartitem-no");
    console.log(index)
    entireCart.splice(index, 1);

    localStorage.setItem("entireCart", JSON.stringify(entireCart));


    $("#cartContainer").empty();
    renderCartItems();
    sumCart();
    location.reload();
  }

});

function renderCartItems() {

  cartContainer.innerHTML = "";

  //var arrayOfValues = Object.values(localStorage);
  //console.log(arrayOfValues)

  entireCart = entireCart.concat(JSON.parse(localStorage.getItem('entireCart') || '[]'));
  console.log(entireCart);


  var div = document.createElement("div");
  cartContainer.append(div)

  const newArray = entireCart.map(element => element.product);
  console.log(newArray)

  for (let index in entireCart) {
    console.log(`${entireCart[index].product}`)
  }

  for (var i = 0; i < cartitem.length; i++) {
    var cartitemz = cartitem[i];

    //BEST CONSOLE.LOG HERE FOR LOCALSTORAGE ITEM
    console.log(cartitemz)
  }

  Object.keys(entireCart).forEach(index =>

    $(`#cartContainer`).prepend(`<div class="col-lg-12" id="itemWrapper" cartitem-no="${index}"><img id="productImage" src="${entireCart[index].productimg}"><ul><li>${entireCart[index].product}</li> <li>$${entireCart[index].itemprice}</li> <li>${entireCart[index].customfont}</li> <li>${entireCart[index].customimg}</li> <li>${entireCart[index].customtext}</li></ul> <button class='rfc'cartitem-no="${index}">Remove from Cart</button></div>`)
  );

}

function sumCart() {

  var itemPricesArray = [];

  for (let index in entireCart) {
    console.log(`${entireCart[index].itemprice}`)
  }

  Object.keys(entireCart).forEach(index =>
    itemPricesArray.push(`${entireCart[index].itemprice}`)
  );

  console.log(itemPricesArray)

  for (var i = 0; i < itemPricesArray.length; i++) itemPricesArray[i] = parseInt(itemPricesArray[i], 10);
  console.log(itemPricesArray)

  var itemTotal = itemPricesArray.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);

  console.log(itemTotal)
  var totalwTax = (itemTotal / 6.75) + itemTotal;
  totalwTax = totalwTax.toFixed(2);
  console.log(totalwTax);

  var subtotal = document.querySelector('#subtotal')
  subtotal.append(totalwTax);
}

// Create an instance of the Stripe object with your publishable API key
var stripe = Stripe("pk_test_51IgyxfJXUNR7kFRIMwOR064bEohYohGOD1UONN51CLlUUVqsf9YqJqXB545FSpdzlj6Ogudlzqt3bnwc2e32ObNb00MxNMRIf6");
var checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener("click", function () {
  fetch("/create-checkout-session", {
    method: "POST",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
      // If redirectToCheckout fails due to a browser or network
      // error, you should display the localized error message to your
      // customer using error.message.
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});