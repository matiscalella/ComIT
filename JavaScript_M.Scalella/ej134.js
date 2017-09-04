let numeros = [];

for (n = 0; n <= 10000; n++) {
    numeros.push(n);
}
// Sumar todos los valores del array
let suma = 0;
for (index = 0; index <= 10000; index++) {
    suma += numeros[index];
    console.log(suma); // muestra en consola los resultados parciales
};

(suma === 50005000) ? console.log('El ejercicio es correcto') : console.log('Verificar el ejercicio para obtener el resultado esperado!!!');

