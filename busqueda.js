const urlParams = new URLSearchParams(window.location.search);
const busqueda = urlParams.get("busqueda");

document.getElementById("search").value = busqueda;


