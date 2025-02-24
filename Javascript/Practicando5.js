/* for(i=0; i<10 ; i++){
    document.write("En esta vuelta de bucle I vale " + i);
    document.write("<br>");
}
document.write("Ejecucion terminada."); */

var contador = 0;
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

while(contador < meses.length){
    document.write(meses[contador] + "<br>");
    contador++;
}


//---------------------------------/
let contador2 = 0;
let ciclos = Number(prompt("Introduce numero de ejecuciones"));

while (contador2 <ciclos){
    console.log("contador vale ahora:" + contador2);
    contador2++;
}

