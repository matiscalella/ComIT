function elMasGrande(nombre) {
    if (nombre === 'Roman') {
        let textoAMostrar = 'El mejor de la historia es Román';
        console.log(textoAMostrar.toUpperCase());
    } else {
        let textoMinuscula = 'Por favor ingrese el nombre de un gran jugador';
        console.log(textoMinuscula.toLowerCase());
    }
}

elMasGrande('Juan');