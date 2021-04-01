
$(document).ready(function () {

    var cartitem = [];

    $("#addCart").on("click", function (event, res) {

        event.preventDefault();

        itemsID = $('.portfolio-item').attr('data-id');
        console.log("this itemid" + itemsID)

        var newcartitem = {
            id: window.itemsID,
            product: $("div.portfolio-caption-heading").text(),
            customtext: $("#customText").val().trim(),
            customfont: $("#customfont").val(),
            customoption: $("#customoption").val(),
            customimg: $("#customimg").val()
        };

        cartitem.push(newcartitem);

        console.log(cartitem);

        storeCartItems();

        function storeCartItems() {
            localStorage.setItem("cartitem", JSON.stringify(cartitem))
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