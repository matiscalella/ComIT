function numeroMasGrande(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`El número ${numero1} es más grande que ${numero2}`)
    }
    else if (numero1 === numero2) {
        console.log(`Los dos números son ${numero1}`)
    }
    else if (typeof numero1 !== number) {
        console.log('Esta función espera valores del tipo number')
    };
}

numeroMasGrande('3', 1);