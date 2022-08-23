window.addEventListener('touchmove', event => {
    console.log(event);

}, { passive: true });



$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        lazyLoad: true,
        loop: true,
        margin: 10,
        dots: true,
        center: true,
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
                items: 3
            },
            1440: {
                items: 4
            }
        }
    });

    b = document.querySelectorAll('button.owl-dot');

    for (var i = 0; i < b.length; i += 1) {
        b[i].setAttribute("name", "dot");
        b[i].setAttribute("aria-label", "dot");
    }
});
