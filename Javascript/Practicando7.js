/*FUNCION FLECHA : Sustituye flecha por la palabra function,
                   Si lleva un parámetro no hace falta poner los paréntesis, si lleva dos sí.*/

function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    suma = num1 + num2;
    
    sumaYmuestra(suma);
    sumaPorDos(suma);

    return suma;

} 

// sumame(8,7, dato => {}, dato => {});
sumame(8,7, dato => {
                     console.log("La suma es: ", dato);       
                    }, 
                      dato1 => {
                        console.log("La suma de dos es: ", (dato1 * 2));
                      });