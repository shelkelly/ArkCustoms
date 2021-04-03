var cartitem = [];
var cartlist = document.querySelector("#cartlist");

init();
console.log(cartitem)


function init() {
  // Get stored cartitem from localStorage
  // Parsing the JSON string to an object
  var cartItems = JSON.parse(localStorage.getItem("cartitem"));

  // If cartitem were retrieved from localStorage, update the cartitem array to it
  if (cartItems !== null) {
    cartitem = cartItems;
  }
  // Render cartitem to the DOM
  renderCartItems();
}

function renderCartItems() {

  var arrayOfValues = Object.values(localStorage);
  console.log(arrayOfValues)

  // Clear todoList element and update todoCountSpan
  cartlist.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < cartitem.length; i++) {
    var cartitemz = cartitem[i];

    //BEST CONSOLE.LOG HERE FOR CART ITEM
    console.log(cartitemz)

    //var li = document.createElement("li");
    //li.textContent = cartitemz;


    //var button = document.createElement("button");
    //button.textContent = "Remove";

    //cartlist.appendChild(li);
    //cartlist.appendChild(button);
  }

  Object.keys(cartitemz).forEach(key => {
    console.log(key, cartitemz[key])
    var orderinfo = (key, cartitemz[key])

    var li = document.createElement("li");
    li.innerText = orderinfo;
    cartlist.appendChild(li);


  })
}

