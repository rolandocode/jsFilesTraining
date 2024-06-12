import { IViaje2025 } from "./IViaje2024";
var miViaje =  <IViaje2025>{};

miViaje.acompañante = "Kiwi";
miViaje.dinero = 50000;
miViaje.personasEnLosCavazos = 30;
miViaje.dineroExtra = 1000;

if (miViaje.dinero > 45000){
    console.log("Vamos a cancun!")
    llendoACancun();
}
else{
    console.log("Vamos a Santiago NL!!")
    llendoASantiago();
    if (miViaje.personasEnLosCavazos <= 30)
        console.log("Comprar ranas en los cavazos!");
}

console.log("Mi acompañante es " + miViaje.acompañante)


function llendoASantiago(){
    console.log("Viajando por carretera a Santiago");
    console.log("Rentando una cabañita");
}

function llendoACancun(){
    debugger;
    console.log("Viajando en avión a cancun...");
    console.log("Llegando al hotel en cancún");
    console.log("Llendo a la playita a cancún");
    console.log("Tomando piña colada...");
}