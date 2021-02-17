$(document).ready(function() {

    $(".portfolio-item").on("click", function (event) {
        event.preventDefault();

        console.log(this.id);

        window.location.pathname = '/product/:id'

    });

})