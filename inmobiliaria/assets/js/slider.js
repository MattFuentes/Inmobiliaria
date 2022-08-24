window.addEventListener('load', function () {
    new Glider(document.querySelector('.slider'), {
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: false,
        rewind: true,
        arrows: {
            prev: '.slider-btn-left',
            next: '.slider-btn-right'
        }
    });
});