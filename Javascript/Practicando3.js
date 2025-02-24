//Para averiguar si un valor es numérico usamos la función isNaN().

var num1 = prompt("Introduce numero1");
var num2 = prompt("Introduce numero2");

if(!isNaN(num1) && !isNaN(num2) ){
    alert(parseInt(num1) + parseInt(num2));
} else {
    alert("No has ingresado numeros");
}