$(document).ready(function () {
    $('#slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });
});
$('#slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='prev.png'>", "<img src='next.png'>"],
    items: 1,
});
