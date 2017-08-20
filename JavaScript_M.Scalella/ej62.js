const numeroDeMes = 4;
let nombreDeMes = null;
let cantidadDeDias = null;

switch (numeroDeMes) {
    case 1:
    nombreDeMes = 'Enero';
    break;
    case 2:
    nombreDeMes = 'Febrero';
    break;
    case 3:
    nombreDeMes = 'Marzo';
    break;
    case 4:
    nombreDeMes = 'Abril';
    break;
    case 5:
    nombreDeMes = 'Mayo';
    break;
    case 6:
    nombreDeMes = 'Junio';
    break;
    case 7:
    nombreDeMes = 'Julio';
    break;
    case 8:
    nombreDeMes = 'Agosto';
    break;
    case 9:
    nombreDeMes = 'Septiembre';
    break;
    case 10:
    nombreDeMes = 'Octubre';
    break;
    case 11:
    nombreDeMes = 'Noviembre';
    break;
    case 12:
    nombreDeMes = 'Diciembre';
    break;
    default:
    console.log('Ingrese un número entre 1 y 12');
}
switch (numeroDeMes) {
    case 1:
    cantidadDeDias = '31';
    break;
    case 2:
    cantidadDeDias = '28/29';
    break;
    case 3:
    cantidadDeDias = '31';
    break;
    case 4:
    cantidadDeDias = '30';
    break;
    case 5:
    cantidadDeDias = '31';
    break;
    case 6:
    cantidadDeDias = '30';
    break;
    case 7:
    cantidadDeDias = '31';
    break;
    case 8:
    cantidadDeDias = '31';
    break;
    case 9:
    cantidadDeDias = '30';
    break;
    case 10:
    cantidadDeDias = '31';
    break;
    case 11:
    cantidadDeDias = '30';
    break;
    case 12:
    cantidadDeDias = '31';
    break;
    default:
    console.log('Ingrese un número entre 1 y 12');
}


console.log(`El mes seleccionado es ${nombreDeMes} y tiene ${cantidadDeDias} días`)