
let saludar = (nombre, apellido, callback) => {
    console.log(`Hola ${nombre} ${apellido}`);
    callback();
}

let funcion = function callback() {
    console.log('Luego de saludar se ejecuta el callback');
};

module.exports = saludar;
module.exports = funcion;