window.addEventListener('load', function () {
    new Glider(document.querySelector('.slider'), {
        // Celular
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: true,
        rewind: true,
        dragVelocity: 2,
        arrows: {
            prev: '.slider-btn-left',
            next: '.slider-btn-right'
        },
        responsive: [
            {
              // Pantalla mayor a 775px
              breakpoint: 775,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // Pantalla mayor a 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                scrollLock: false,
                draggable: false,
              }
            }
          ]
    })
});