let numero = 0;
let suma = 0;

do {
    if ((numero % 2) !== 0) {
        suma += numero;
        console.log(suma);
    }
    numero++;
} while (numero <= 1000);