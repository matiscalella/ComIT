let mutantes = [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe'
];

if (mutantes.indexOf('James "Logan" Howlett') > -1 && mutantes.indexOf('Prof. Charles Francis Xavier') > -1) {
    console.log('Amamos a los X-men');
} else {
    console.log('Los X-men apestan.');
}

/* Otra forma de hacer lo mismo sería:
(mutantes.indexOf('James "Logan" Howlett') > -1 && mutantes.indexOf('Prof. Charles Francis Xavier') > -1) ? console.log('Amamos a los X-men') : console.log('Los X-men apestan.');
*/