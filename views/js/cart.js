

var cartitem = [];
var cartCount = 0;
var cartlist = document.querySelector("#cartlist");
var portfolioCaption = document.querySelector(".portfolio-caption");
var entireCart = [];

init();
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

  //NEW COL FOR ITEM
  var cartContainer = document.getElementById("cartContainer")
    var div = document.createElement("div");
    var packaging = "thePackaging"
    cartContainer.appendChild(div);
    div.setAttribute("data-name", cartCount);
    div.classList.add("col-lg")
    div.setAttribute("id", packaging)

  // Render cartitem to the DOM
  storeCartItems();
  renderCartItems();
}

function storeCartItems(fontArg, imgArg, optionArg, textArg, idArg) {

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
     
    $(`#cartContainer`).append(`${entireCart[index].product} ${entireCart[index].customfont} ${entireCart[index].customimg} ${entireCart[index].customtext}`)
    );

  Object.keys(cartitemz).forEach(key => {

    console.log(key, cartitemz[key])
    var orderinfo = (key, cartitemz[key])
    
    var thePackaging = document.getElementById("thePackaging");

    // Render a new li for each todo
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.innerText = orderinfo;
    ul.append(li);
    thePackaging.append(li);
  })



  var button = document.createElement("button");
  button.textContent = "Remove";
  //portfolioCaption.appendChild(button);

}

