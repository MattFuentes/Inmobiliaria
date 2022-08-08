
const categorys  = document.querySelectorAll('.filter-menu-item'); // Todas las categorias del filtro
const allHouses = document.querySelectorAll('.card'); // Todas las cartas

// Filtra las cartas removiendo o agregando la clase "filter-none"

const filterCategorys = (item) => {
    changeActive(item);
    for( let i = 0; i < allHouses.length; i++){
        if( allHouses[i].classList.contains(item.attributes.id.value)){
            allHouses[i].classList.remove("filter-none");
        } else {
            allHouses[i].classList.add("filter-none");
        }
    }
}

// Agrega la clase "active" para mas placer en la categoria seleccionada y la remueve en el resto
 
const changeActive = (activeItem) => {
    for(let i = 0; i < categorys.length; i++){
        categorys[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

// EVENTOS

for( let i = 0; i < categorys.length; i++){
    categorys[i].addEventListener('click', filterCategorys.bind(this, categorys[i]));
}
