
$(document).ready(function () {

    $("#addCart").on("click", function (event, res) {

        event.preventDefault();

        itemsID = $('.portfolio-item').attr('data-id');
        console.log("this itemid" + itemsID)

        var newCustomItem = {
            id: window.itemsID,
            product: $("div.portfolio-caption-heading").text(),
            customtext: $("#customText").val().trim(),
            customfont: $("#customfont").val(),
            customoption: $("#customoption").val(),
            customimg: $("#customimg").val()
        };

        $.ajax("/cart", {
            type: "POST",
            data: newCustomItem
        }).then(
            function() {
                console.log("added item to cart");
            }
        )

    });
    
})