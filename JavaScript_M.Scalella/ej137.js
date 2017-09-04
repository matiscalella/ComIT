const numeros = [];

for (n = 0; n <= 1000; n++) {
    numeros.push(n);
};

const numerosDeA10 = numeros.map(function(numero){
    return numero += 10;
});

numeros.forEach(function(number, index) {
    while(index <= 10) {
        console.log('Indice: ' + index);
        console.log('Valor original: ' + number);
        console.log('Valor Incrementado: ' + numerosDeA10[index]);
        break;
    };
});

