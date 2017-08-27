let linea = 0;

do {
    let cantidadDeCaracteres = 0;
    let asterisco = '';
        while (cantidadDeCaracteres <= linea) {
        asterisco += '*';
        cantidadDeCaracteres++;
    }
    console.log(asterisco);
    linea++;
} while (linea <= 8);