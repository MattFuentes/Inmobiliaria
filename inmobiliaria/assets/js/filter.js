// Const de cada boton
// Evento cada boton
// Const de cada casa, ph, depa

const casasBtn = document.querySelector('#casasBtn');
const depaBtn = document.querySelector('#depaBtn');
const phBtn = document.querySelector('#phBtn');
const casa = document.getElementById('casa');
const depa = document.getElementById('depa');
const ph = document.getElementById('ph');

const getCasa = () => {
    casa.classList.remove('filter-none');
    ph.classList.add('filter-none');
    depa.classList.add('filter-none');
    casa.classList.add('filter-none');
    ph.classList.add('filter-none');
    depa.classList.add('filter-none');
    casa.classList.add('filter-none');
    ph.classList.add('filter-none');
    depa.classList.add('filter-none');
}

addEventListener('click', getCasa, false)
