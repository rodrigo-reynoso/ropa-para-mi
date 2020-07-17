var texto = document.getElementById("search").value;
console.log(texto);


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const busqueda = urlParams.get('busqueda')
console.log(busqueda);

document.getElementById("search").value = busqueda;