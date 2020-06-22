// creo fecha

 var fecha = new Date(); // objeto fecha actual // var porque es la unica que es modificable dentro de una function


function textodia(fecha){
    var numDiasSemana = fecha.getDay();
    var diasDeSemana = new Array('Domingo','Lunes','Marte','Miércoles','Jueves','Viernes','Sábado');
    var diasLetras =  diasDeSemana[fecha.getDay()]; // llamo a fecha
    return diasLetras;
 } 
 console.log(textodia(fecha));
    function textoMes(fecha){
    var Mes = new Array( 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
    var mesLetra = Mes[fecha.getMonth()];
    return mesLetra;
    }
    console.log(textoMes(fecha));

    var diaMes = (fecha.getDate());
    // document.getElementById('diaSemana').innerHTML = textodia(fecha);
    // console.log(textodia(fecha));
     document.getElementById('diaSemana').innerHTML = textodia(fecha) ;
    let darleColor = document.getElementById('diaSemana');
    darleColor.style.color = 'rgb(13, 23, 173)';
    console.log(dia);
    document.getElementById('dia').innerHTML = diaMes;
    document.getElementById('mesLetra').innerHTML = textoMes(fecha);
    console.log(mesLetra);
    


