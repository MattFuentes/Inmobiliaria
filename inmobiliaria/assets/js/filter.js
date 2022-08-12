

const categorys = document.querySelectorAll('.filter-menu-item'); // Todas las categorias del filtro
const allHouses = document.querySelectorAll('.card'); // Todas las cartas
console.log(categorys);
// Filtra las cartas removiendo o agregando la clase "filter-none"

const filterCategorys = (item) => {
    changeActive(item);
    for (let i = 0; i < allHouses.length; i++) {
        if (allHouses[i].classList.contains(item.attributes.id.value)) {
            allHouses[i].classList.remove("filter-none");
        } else {
            allHouses[i].classList.add("filter-none");
        }
    }
    countCards();
}

// Agrega la clase "active" para mas placer en la categoria seleccionada y la remueve en el resto

const changeActive = (activeItem) => {
    for (let i = 0; i < categorys.length; i++) {
        categorys[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

// Cuenta la cantidad de casas en pantalla y cambia el texto del html

const countCards = () => {
    const actualHouses = document.querySelectorAll('.filter-none');
    let count = allHouses.length - actualHouses.length;
    console.log(count);
    // Falta el innerText xddddd
}

// EVENTOS

for (let i = 0; i < categorys.length; i++) {
    categorys[i].addEventListener('click', filterCategorys.bind(this, categorys[i]));
}

