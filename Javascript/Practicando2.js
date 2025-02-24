
var precio = 3000;
var dinero = prompt("Introduce cuanto dinero tienes");
var edad = prompt("Introduce tu edad");

/* if(dinero>precio){
    alert("Te puedes comprar el coche, tu cambio es de: " + (dinero - precio));
}   alert("Te vas en autobus, te falta completar: " + (precio - dinero));
 */

if ((precio < dinero) && (edad >= 18)){
    alert("Te puedes comprar el coche, tu cambio es de: " + (dinero - precio));
} else if ((precio < dinero) && (edad < 18)){
    alert("Tiene el dinero pero NO la edad");
} else if ((precio > dinero) && (edad >= 18) ){
    alert("Tienes la edad pero NO el dinero");
} else if ((precio > dinero) && (edad < 18)){
    alert("Ni dinero ni la edad");
}

