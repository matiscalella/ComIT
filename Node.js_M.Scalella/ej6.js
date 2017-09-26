let funcion = function callback() {
    console.log('Luego de saludar se ejecuta el callback');
};

let saludar = (nombre, apellido, callback) => {
    console.log(`Hola ${nombre} ${apellido}`);
    callback();
}

saludar('Matias', 'Scalella', funcion);