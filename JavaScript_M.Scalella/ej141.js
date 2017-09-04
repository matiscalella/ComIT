const gastosDelViaje = [
    100,
    1000,
    200
];

const gastosTotales = gastosDelViaje.reduce(function(total, concepto) {
    return total + concepto;
});

console.log(gastosTotales);