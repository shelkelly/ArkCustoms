

var cartitem = [];
var cartCount = 0;
var cartlist = document.querySelector("#cartlist");
var portfolioCaption = document.querySelector(".portfolio-caption");
var rfc = document.querySelector(".rfc");
var entireCart = [];

init();

$("#cartContainer").on("click", function(event) {
  console.log('clicky')
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("cartitem-no");
    entireCart.splice(index, 1);

    localStorage.setItem("entireCart", JSON.stringify(entireCart));

    // Re-render the list
    storeCartItems();
    renderCartItems();
    
  }
});
console.log(cartitem[0])


function init() {
  // Get stored cartitem from localStorage
  // Parsing the JSON string to an object
  var cartItems = JSON.parse(localStorage.getItem("cartitem"));

  // If cartitem were retrieved from localStorage, update the entireCart array to it
  if (cartItems !== null) {
    cartitem = cartItems;
    entireCart = cartitem;
    console.log(entireCart)
  }



    cartitem.innerText = "";

  // Render cartitem to the DOM
  storeLSItem();
  renderCartItems();
}

function storeLSItem(fontArg, imgArg, optionArg, textArg, idArg) {

  var item = {
    customfont: fontArg,
    customimg: imgArg,
    customoption: optionArg,
    customtext: textArg,
    id: idArg
  }


  entireCart = entireCart.concat(JSON.parse(localStorage.getItem('entireCart') ||'[]'));
  console.log(entireCart);
  
  localStorage.setItem("entireCart", JSON.stringify(entireCart));
}

function renderCartItems() {

  //var arrayOfValues = Object.values(localStorage);
  //console.log(arrayOfValues)
  

  var div = document.createElement("div");
  cartContainer.append(div)

  const newArray = entireCart.map(element => element.product);
  console.log(newArray)

  for(let index in entireCart) {
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
     
    $(`#cartContainer`).append(`<div class="col-lg-10 " id="itemWrapper" cartitem-no="${index}"><ul><li>${entireCart[index].product}</li> <li>${entireCart[index].customfont}</li> <li>${entireCart[index].customimg}</li> <li>${entireCart[index].customtext}</li></ul> <p><button class='rfc'cartitem-no="${index}">Remove from Cart</button></div>`)
    );

}



function removeItemFromCart() {
  
}