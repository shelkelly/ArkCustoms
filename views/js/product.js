
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
            customimg: $("#imgs").val()
        };

        cartitem.push(newcartitem);

        console.log(cartitem);

        storeCartItems();

        function storeCartItems() {
            localStorage.setItem("cartitem", JSON.stringify(cartitem));
            localStorage.setItem("cartQuantity", cartQuantity);
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