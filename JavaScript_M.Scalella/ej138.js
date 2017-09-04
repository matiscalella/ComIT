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

const copiaMutantes = mutantes.map(function(mutante){
    for (let i = 0; (i <= mutantes.length - 1); i++) {
        return mutantes[i] += '<3';
    }
});

console.log(copiaMutantes);