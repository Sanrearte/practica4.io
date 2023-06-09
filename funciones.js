function validacion_campos(){
    var nomb = document.getElementById("nombre").value;
    var apell = document.getElementById("apellido").value;
    var mail = document.getElementById("mail").value;

    if(nomb == "" || apell == "" || mail == ""){
        alert("Debe ingresar una cadena de texto en cada una de las casilla de (Nombre, Edad y Mail)")
        borrar();
        return -1;
    }
}

function validacion_checkbox(){
    var opcion1 = document.getElementById("rojo").checked;
    var opcion2 = document.getElementById("negro").checked;
    var opcion3 = document.getElementById("azul").checked;
    var contador = 0;

    if (opcion1) { contador++; }

    else if (opcion2) { contador++; }

    else if (opcion3) { contador++; }

    if(contador == 0){

        alert("Debe seleccionar al menos una de las casillas del checkbox");
        return -1;
    }
}

function descuentos(){
    var conjunto = document.getElementById("conjunto").value;   
    var result;

    if(validacion_campos() != -1 && validacion_checkbox() != -1){
        borrar();
    }

    if (conjunto == "tenis") { result = 80 - ((5 * 80) / 100); }

    else if (conjunto == "natacion") { result = 100 - ((10 * 100) / 100); }

    else if (conjunto == "comoda") { result = 70 - ((5 * 70) / 100); }

    document.getElementById("resultado1").innerHTML = result;
}

function borrar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("mail").value = "";
}