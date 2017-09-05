const aritmetica = {
    suma: function(numero1, numero2){
        if (typeof (numero1 && numero2) === 'number') {
            console.log(`La suma entre ${numero1} y ${numero2} es: ` + (numero1 + numero2))
        } else {
            console.log('Ingrese numeros validos.')
        }
    },
    resta: function(numero1, numero2){
        if (typeof (numero1 && numero2) === 'number') {
            console.log(`La resta entre ${numero1} y ${numero2} es: ` + (numero1 - numero2))
        } else {
            console.log('Ingrese numeros validos.')
        }
    },
    multiplicar: function(numero1, numero2){
        if (typeof (numero1 && numero2) === 'number') {
            console.log(`La multiplicacion entre ${numero1} y ${numero2} es: ` + (numero1 * numero2))
        } else {
            console.log('Ingrese numeros validos.')
        }
    },
    dividir: function(numero1, numero2){
        if (typeof (numero1 && numero2) === 'number') {
            console.log(`La división entre ${numero1} y ${numero2} es: ` + (numero1 / numero2))
        } else {
            console.log('Ingrese numeros validos.')
        }
    },
    mostrarModulo: function(numero1, numero2){
        if (typeof (numero1 && numero2) === 'number') {
            console.log(`El modulo de ${numero1} es: ` + (numero1 % numero2))
        } else {
            console.log('Ingrese numeros validos.')
        }
    }
};

aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);