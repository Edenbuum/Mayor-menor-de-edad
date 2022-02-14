function peter () {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    if(edad > 17){
        alert(nombre+" eres mayor de edad ");
    }
    else{
        alert(nombre+" eres menor de edad");
    }
}