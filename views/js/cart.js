

var cartitem = [];
var cartCount = 0;
var cartlist = document.querySelector("#cartlist");
var portfolioCaption = document.querySelector(".portfolio-caption");
var rfc = document.querySelector(".rfc");
var entireCart = [];
var checkoutItems = [];

renderCartItems();

$("#checkoutbtn").on("click", function () {

  checkout();


});

$("#cartContainer").on("click", function (event) {
  console.log('clicky')
  var element = event.target;

  // If that element is a button...
  if (element.matches(".rfc") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("cartitem-no");
    entireCart.splice(index, 1);

    localStorage.setItem("entireCart", JSON.stringify(entireCart));

    // Re-render the list
    renderCartItems();

  }
});


console.log(cartitem[0])




function renderCartItems() {

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

  // Clear todoList element and update todoCountSpan
  //cartlist.innerHTML = "";

  for (var i = 0; i < cartitem.length; i++) {
    var cartitemz = cartitem[i];

    //BEST CONSOLE.LOG HERE FOR LOCALSTORAGE ITEM
    console.log(cartitemz)
  }

  Object.keys(entireCart).forEach(index =>

    $(`#cartContainer`).prepend(`<div class="col-lg-10 " id="itemWrapper" cartitem-no="${index}"><ul><li>${entireCart[index].product}</li> <li>${entireCart[index].itemprice}</li> <li>${entireCart[index].customfont}</li> <li>${entireCart[index].customimg}</li> <li>${entireCart[index].customtext}</li></ul> <p><button class='rfc'cartitem-no="${index}">Remove from Cart</button></div>`)
  );

}

function checkout() {
  var total = 0;
  var itemPricesArray = [];

    Object.keys(entireCart).forEach(i =>
      itemPricesArray.push(`${entireCart[i].itemprice}`)
    );

  itemPricesArray = parseInt(itemPricesArray)

    console.log(itemPricesArray)

}

function sumCart(itemPricesArray) {

  let sum = 0;
  for (let cartTotal of Object.values(itemPricesArray)) {
    sum += cartTotal;
  }

  return sum; // 650
}