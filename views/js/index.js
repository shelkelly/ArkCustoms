$(document).ready(function () {

    $("#goToStore").on("click", function (event) {
        event.preventDefault();

        window.location.pathname = '/catalogue'


    });
});
