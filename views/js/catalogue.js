$(document).ready(function() {

    $(".portfolio-item").on("click", function (event) {
        event.preventDefault();

        window.location.pathname = '/product'

    });

})