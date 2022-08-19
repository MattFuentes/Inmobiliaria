// Constantes y variables

const slider     = document.querySelector("#slider");
const slider2    = document.querySelector("#slider2");
const fullscreen = document.querySelector(".fullscreen");
const imgs       = document.querySelectorAll(".slider-img");
const body       = document.querySelector(".body");
const smallImg   = document.querySelectorAll(".small-img");

let sliderSection      = document.querySelectorAll(".slider-section");
let sliderSection2     = document.querySelectorAll(".fullscreen-slider-section");
let sliderSectionLast  = sliderSection[sliderSection.length - 1];
let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];

const btnLeft   = document.querySelector("#left");
const btnRight  = document.querySelector("#right");
const btnLeft2  = document.querySelector("#left2");
const btnRight2 = document.querySelector("#right2");
const btnClose  = document.querySelector("#close");

// Posiciona el ultimo elemento (imagen) en el primer lugar

slider.insertAdjacentElement('afterbegin', sliderSectionLast);
slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);

// Mueve la imagen hacia la derecha y posiciona la ultima a la derecha

const next = (item) => {
    let sliderSectionFirst  = document.querySelectorAll(".slider-section")[0];
    let sliderSectionFirst2  = document.querySelectorAll(".fullscreen-slider-section")[0];

    item.style.marginLeft = "-200%";
    item.style.transition = "all 0.5s";

    setTimeout(() => {
        item.style.transition = "none";
        if(item === slider) {
            item.insertAdjacentElement('beforeend', sliderSectionFirst);
        } else if (item === slider2) {
            item.insertAdjacentElement('beforeend', sliderSectionFirst2);
        }
        item.style.marginLeft = "-100%";
    }, 500);
}

// Mueve la imagen hacia la izquierda y posiciona la ultima a la izquierda

const prev = (item2) => {
    let sliderSection      = document.querySelectorAll(".slider-section");
    let sliderSection2     = document.querySelectorAll(".fullscreen-slider-section");
    
    let sliderSectionLast  = sliderSection[sliderSection.length - 1];
    let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];

    item2.style.marginLeft = "0";
    item2.style.transition = "all 0.5s";
    setTimeout(() => {
        item2.style.transition = "none";
        if(item2 === slider) {
            item2.insertAdjacentElement('afterbegin', sliderSectionLast);
        } else if (item2 === slider2) {
            item2.insertAdjacentElement('afterbegin', sliderSectionLast2);
        }
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

btnRight2.addEventListener('click',() => {
    next(slider2);
});

btnLeft2.addEventListener('click', () => {
    prev(slider2);
});

btnClose.addEventListener('click', () => {
    fullscreen.style.display = "none";
    body.classList.remove("body-fullscreen");
})

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
        fullscreen.style.display = "";
        body.classList.add("body-fullscreen");
    });
}

for(let i = 0; i < smallImg.length; i++){
    smallImg[i].addEventListener('click', () => {
        fullscreen.style.display = "";
        body.classList.add("body-fullscreen");
    });
};