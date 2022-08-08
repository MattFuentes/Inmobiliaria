
const category  = document.querySelectorAll('.filter-menu-item'); // Todas las categorias del filtro
const allHouses = document.querySelectorAll('.card'); // Todas las cartas

//
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

const changeActive = (activeItem) => {
    for(let i = 0; i < category.length; i++){
        category[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

// EVENTOS

for( let i = 0; i < category.length; i++){
    category[i].addEventListener('click', filterCategorys.bind(this, category[i]));
}
