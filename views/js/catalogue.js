

$(document).ready(function() {

    function renderProduct() {
        if (this.id === id) {
            $(".product").load("../product.handlebars");
            window.location.pathname = '/product/:' + id
        }
    }

    $(".portfolio-item").on("click", function (event, res) {

        id = ($(this).data("id"))
        product = ($(this).data(this))

        renderProduct();

    });

})
