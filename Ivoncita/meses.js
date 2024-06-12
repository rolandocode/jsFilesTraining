var mes = 4;
var numeroDiasEnElMes = 0;
var numeroDias30 = 30;
var numeroDias31 = 31;
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numeroDiasEnElMes = numeroDias31;
        break;
    case 2:
        numeroDiasEnElMes = 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        numeroDiasEnElMes = numeroDias30;
        break;
    default:
        throw "El mes proporcionado no existe";
}
console.log("El mes seleccionado tiene " + numeroDiasEnElMes);
