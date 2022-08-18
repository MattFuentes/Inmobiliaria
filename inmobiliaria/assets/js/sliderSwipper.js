
let swipper = document.querySelector('.slider-swipper');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx; 
let x;

const checkBoundary = () => {
    let outer = swipper.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style.left) > 0 ) {
        innerSlider.style.left = '0px';
    }else if(inner.right < outer.right ) {
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}

swipper.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    swipper.style.cursor = 'grabbing'
});

swipper.addEventListener('mouseenter', () => {
    swipper.style.cursor = 'grab'
});

swipper.addEventListener('mouseup', () => {
    swipper.style.cursor = 'grab'
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

swipper.addEventListener('mousemove', (e) => {
    if( !pressed ) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startx}px`;
    checkBoundary();
})

