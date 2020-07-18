var texto = document.getElementById("search").value;
console.log(texto);

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const busqueda = urlParams.get("busqueda");
console.log(busqueda);

document.getElementById("search").value = busqueda;

let mostrarLoQueEscribo = function () {
  let texto3 = document.getElementById("search").value;
  const icono = window.location.search1;
  console.log(icono);
  const urlParams = new URLSearchParams(icono);
  const busqueda1 = urlParams.get("busqueda");
  console.log(busqueda1);
  //   var texto4 = document.getElementById("search").value;
  // console.log(texto3);
  // texto4 = texto3;
  document.getElementById("search").value = busqueda;
};
