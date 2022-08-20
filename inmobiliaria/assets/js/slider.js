// Constantes y variables

const slider     = document.querySelector("#slider");
const imgs       = document.querySelectorAll(".slider-img"); 
const body       = document.querySelector(".body");
const smallImg   = document.querySelectorAll(".small-img");

let sliderSection      = document.querySelectorAll(".slider-section");

let sliderSectionLast  = sliderSection[sliderSection.length - 1];

const btnLeft   = document.querySelector("#left");
const btnRight  = document.querySelector("#right");

const btnClose  = document.querySelector("#close");

// Posiciona el ultimo elemento (imagen) en el primer lugar

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// Mueve la imagen hacia la derecha y posiciona la ultima a la derecha

const next = (item) => {
    let sliderSectionFirst  = document.querySelectorAll(".slider-section")[0];

    item.style.marginLeft = "-200%";
    item.style.transition = "all 0.5s";

    setTimeout(() => {
        item.style.transition = "none";
        item.insertAdjacentElement('beforeend', sliderSectionFirst);
        item.style.marginLeft = "-100%";
    }, 500);
}

// Mueve la imagen hacia la izquierda y posiciona la ultima a la izquierda

const prev = (item2) => {
    let sliderSection      = document.querySelectorAll(".slider-section");
    let sliderSectionLast  = sliderSection[sliderSection.length - 1];

    item2.style.marginLeft = "0";
    item2.style.transition = "all 0.5s";

    setTimeout(() => {
        item2.style.transition = "none";
        item2.insertAdjacentElement('afterbegin', sliderSectionLast);
        item2.style.marginLeft = "-100%";
    }, 500);
}

// Eventos

btnRight.addEventListener('click', () => {
    next(slider);
});

btnLeft.addEventListener('click', () => {
    prev(slider);
});

