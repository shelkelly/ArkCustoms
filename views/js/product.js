
$(document).ready(function () {

    var cartitem = [];
    var cartQuantity = 0;

    $("#addCart").on("click", function (event, res) {

        cartQuantity++;
        console.log(cartQuantity)

        event.preventDefault();

        itemsID = $('.portfolio-item').attr('data-id');
        console.log("this itemid" + itemsID)

        var newcartitem = {
            id: window.itemsID,
            product: $("div.portfolio-caption-heading").text(),
            customtext: $("#customText").val().trim(),
            customfont: $("#fonts").val(),
            customoption: $("#options").val(),
            customimg: $("#imgs").val(),
            itemprice: $("#productPrice").text()
        };

        cartitem.push(newcartitem);

        console.log(cartitem);

        
        storeCartItems();
        init();

        function storeCartItems() {
            localStorage.setItem("cartitem", JSON.stringify(cartitem));
            localStorage.setItem("cartQuantity", cartQuantity);
        }

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
        }

        function storeLSItem(fontArg, imgArg, optionArg, textArg, idArg, priceArg) {

            var item = {
                customfont: fontArg,
                customimg: imgArg,
                customoption: optionArg,
                customtext: textArg,
                id: idArg,
                itemPrice: priceArg
            }


            entireCart = entireCart.concat(JSON.parse(localStorage.getItem('entireCart') || '[]'));
            console.log(entireCart);

            localStorage.setItem("entireCart", JSON.stringify(entireCart));
        }

        window.location.pathname = '/cart';

        // $.ajax("/cart", {
        //   type: "POST",
        //  data: newCustomItem
        // }).then(
        //   function() {
        //      console.log("added item to cart");
        //   }
        // )

    });

})