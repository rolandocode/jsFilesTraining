debugger;
var dinero = 30000;
var personasEnLosCavazos = 100;
if (dinero > 45000) {
    console.log("Vamos a cancun!");
    llendoACancun();
}
else {
    console.log("Vamos a Santiago NL!!");
    llendoASantiago();
    if (personasEnLosCavazos < 30)
        console.log("Comprar ranas en los cavazos!");
}
function llendoASantiago() {
    console.log("Viajando por carretera a Santiago");
    console.log("Rentando una cabañita");
}
function llendoACancun() {
    debugger;
    console.log("Viajando en avión a cancun...");
    console.log("Llegando al hotel en cancún");
    console.log("Llendo a la playita a cancún");
    console.log("Tomando piña colada...");
}
