let alumnas = [
    'Erica',
    'Melisa',
    'Caro',
    'Emilia',
    'Belen',
];

let alumnos = [
    'Matias',
    'Pana',
    'Cris',
    'Diego',
    'Gaston'
];

let curso = alumnas.concat(alumnos);

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let index = 0;
while (index <= (alumnos.length - 1)) {
    console.log(alumnos[index]);
    index++;
};

for (i = 0; i <= (curso.length - 1); i++) {
    console.log(curso[i])
};