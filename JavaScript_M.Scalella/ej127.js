let gustos = [];

let gustosAgregados = gustos.unshift('Dulce de Leche', 'Menta Granizada', 'Chocolate', 'Vainilla', 'Crema americana', 'Granizado', 'Chocolate Marroc', 'Tramontana', 'Crema del Cielo', 'Sambayon');

let desordenandoHelados = function(coleccion, gustoAlInicio) {
    let eliminarPrimero = coleccion.shift();
    let agregarPrimero = coleccion.unshift(gustoAlInicio);
    return coleccion;
};

let reordenandoHelados = function (coleccion, gustoAlFinal) {
    let eliminarUltimo = coleccion.pop();
    let agregarUltimo = coleccion.push(gustoAlFinal);
    return coleccion;
};

desordenandoHelados(gustos, 'Sambayon');
reordenandoHelados(gustos, 'Dulce de Leche');

let gustosSinStock = [gustos.shift(), gustos.shift()];
console.log(gustos);
console.log(gustosSinStock);