function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else { return false; }
}

if (esPar(numero) === true) {
    console.log(`${numero} es par`)
} else {console.log(`${numero} no es par`)}

esPar(2);