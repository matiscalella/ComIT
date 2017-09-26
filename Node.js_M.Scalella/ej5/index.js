let logger = require('logplease');
let Logger = logger.create('');
let funcion = require('./numeros');

// Por algun motivo no esta saliendo el ejercicio

if (funcion(2) == true) {
    Logger.info('El número es par');
} else {
    Logger.error('El número no es par');
};

