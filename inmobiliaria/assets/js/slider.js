// Constantes y variables

const slider          = document.querySelector("#slider");
let sliderSection     = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft         = document.querySelector("#left");
const btnRight        = document.querySelector("#right");

// Posiciona el ultimo elemento (imagen) en el primer lugar

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// Mueve la imagen hacia la derecha y posiciona la ultima a la derecha

const next = () => {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

// Mueve la imagen hacia la izquierda y posiciona la ultima a la izquierda

const prev = () => {
    let sliderSection     = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

// Eventos

btnRight.addEventListener('click', () => {
    next();
});

btnLeft.addEventListener('click', () => {
    prev();
});