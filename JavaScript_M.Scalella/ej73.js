let linea = 0;

while (linea <= 8) {
    let cantidadDeCaracteres = 0;
    let asterisco = '*'+'*'+'*'+'*'+'*'+'*'+'*'+'*'+'*';
        while (cantidadDeCaracteres <= linea) {
        asterisco -= '*';
        cantidadDeCaracteres++;
    }
    console.log(asterisco);
    linea++;
}