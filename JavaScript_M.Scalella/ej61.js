let dia = 7;
let nombreDelDia = null;

switch (dia) {
    case 1:
        nombreDelDia = 'Lunes';
    break;
    case 2:
        nombreDelDia = 'Martes';
    break;
    case 3:
        nombreDelDia = 'Miercoles';
    break;
    case 4:
        nombreDelDia = 'Jueves';
    break;
    case 5:
        nombreDelDia = 'Viernes';
    break;
    case 6:
        nombreDelDia = 'Sabado';
    break;
    case 7:
        nombreDelDia = 'Domingo';
    break;
    default:
        console.log('Por favor seleccionar un número de 1 a 7');
}

console.log(`El dia seleccionado es ${nombreDelDia}`);


/*Estructura con IFs ANIDADOS

let dia = '7'; 

if (dia === '1') {
    console.log('El dia seleccionado es Lunes')
}
else if (dia === '2') {
    console.log('El dia seleccionado es Martes')
}
else if (dia === '3') {
    console.log('El dia seleccionado es Miercoles')
}
else if (dia === '4') {
    console.log('El dia seleccionado es Jueves')
}
else if (dia === '5') {
    console.log('El dia seleccionado es Viernes')
}
else if (dia === '6') {
    console.log('El dia seleccionado es Sabado')
}
else if (dia === '7') {
    console.log('El dia seleccionado es Domingo')
} else {
    console.log('Por favor seleccionar un numero de 1 a 7')
}*/