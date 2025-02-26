//Recordad que demo y demo2 deben estar creados en la pagina HTML
/*
body>
    <h3 id="demo"></h3>
    <h3 id="demo2"></h3>
</body>
*/ 

function funcionPrincipal(callback1, callback2, callback3){
    //codigo de la funcion principal
    console.log("Iniciando los callback");
    callback1();

    //mas codigo de la funcion principal
    var miVar = setInterval(function() {callback2()},5000);

    //mas codigo de la funcion principal
    var miVar2 = setInterval(function() {callback3()},8000);

    //mas codigo si fuese necesario
    
} 

function callback1(){
    alert("primer Callback");
}

function callback2(){
    var d = new Date();
    var t = d.toLocaleDateString();
    document.getElementById("demo").innerHTML = t;
}

function callback3(){
    document.getElementById("demo2").innerHTML = "Esto es el callback 3";
}

funcionPrincipal(callback1, callback2, callback3);