const numeros = [];

for (let n = 1; n <= 1000; n++) {
    numeros.push(n);
};

const numerosPares = numeros.filter(function(pares){
    if (pares % 2 == 0) {
        return true
    }
});

const ultimosDiezPares = function(index) {
    for (let index = 490; index <= 499; index++) {
        console.log(numerosPares[index]);
    }
};

ultimosDiezPares();

// Este seria otro metodo para mostrar los Pares
/*const ultimosDiezPares = function() {
    console.log(numerosPares[numerosPares.length - 10]);
    console.log(numerosPares[numerosPares.length - 9]);
    console.log(numerosPares[numerosPares.length - 8]);
    console.log(numerosPares[numerosPares.length - 7]);
    console.log(numerosPares[numerosPares.length - 6]);
    console.log(numerosPares[numerosPares.length - 5]);
    console.log(numerosPares[numerosPares.length - 4]);
    console.log(numerosPares[numerosPares.length - 3]);
    console.log(numerosPares[numerosPares.length - 2]);
    console.log(numerosPares[numerosPares.length - 1]);
};

ultimosDiezPares(); */

const numerosImpares = numeros.filter(function(impares){
    if (impares % 2 != 0) {
        return true
    }
});

const ultimosDiezImpares = function(index) {
    for (let index = 490; index <= 499; index++) {
        console.log(numerosImpares[index]);
    }
};

ultimosDiezImpares();
