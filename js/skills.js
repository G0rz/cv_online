$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        loop: true,
        margin: 25,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 2
            },
            1440: {
                items: 3
            }
        }
    });
});
