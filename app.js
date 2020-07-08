// creo fecha

 var fecha = new Date(); // objeto fecha actual // var porque es la unica que es modificable dentro de una function


function textoFecha(fecha){
    var numDiasSemana = fecha.getDay();
    var diasDeSemana = new Array('Domingo','Lunes','Marte','Miércoles','Jueves','Viernes','Sábado');
    var diasLetras =  diasDeSemana[fecha.getDay()]; // llamo a fecha

    var Mes = new Array( 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
    var mesLetra = Mes[fecha.getMonth()];

    var diaMes = (fecha.getDate());

    var devolver = 'Hoy es un gran día, ' + diasLetras + ' ' + diaMes +' de '+ mesLetra;
    return devolver;
}
console.log(textoFecha(fecha));
document.getElementById ('llamo_fecha').innerHTML = textoFecha(fecha);