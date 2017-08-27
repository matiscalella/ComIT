function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else { return false;}
}

esPar(2);

if (esPar() === true) {
    console.log(`${numero} es par`)
} else {console.log(`${numero} no es par`)}