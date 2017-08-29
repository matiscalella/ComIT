function mostrarNumeros(inicio, fin) {
    if (inicio < fin) {
        for (let n = inicio; n <= fin; n++) {
            console.log(n);
        } 
    } else if (inicio > fin) { 
        for (let n = inicio; n >= fin; n--) {
                console.log(n)
            }
        } else if (inicio === fin) {
            (console.log('Ambos numeros son iguales'))
        } else {
            console.log('Ingrese NUMEROS')
        }
    }

mostrarNumeros('1000', 1000);