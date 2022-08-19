
const categorys = document.querySelectorAll('.filter-menu-item'); // Todas las categorias del filtro
const allHouses = document.querySelectorAll('.card'); // Todas las cartas
const allZones  = document.querySelectorAll('.filter-zone-item'); // Todas las zonas

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
}

// Filtra las zonas, al estar apartado de filterCategorys no son afectados entre ellos, manteniendo la categoria casa en distintas zonas

const filterZones = (zone) => {
    changeActiveZone(zone);
    for (let i = 0; i < allHouses.length; i++) {
        if (allHouses[i].classList.contains(zone.attributes.id.value)) {
            allHouses[i].classList.remove("filter-zone-none");
        } else {
            allHouses[i].classList.add("filter-zone-none");
        }
    }
}

// Agrega la clase "active" para mas placer en la categoria seleccionada y la remueve en el resto

const changeActive = (activeItem) => {
    for (let i = 0; i < categorys.length; i++) {
        categorys[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

const changeActiveZone = (activeZone) => {
    for (let i = 0; i < activeZone.length; i++) {
        activeZone[i].classList.remove('active');
    }
    // activeZone.classList.add('active');
}

// EVENTOS

for (let i = 0; i < categorys.length; i++) {
    categorys[i].addEventListener('click', filterCategorys.bind(this, categorys[i]));
}

for (let j = 0; j < allZones.length; j++) {
    allZones[j].addEventListener('click', filterZones.bind(this, allZones[j]));
}
