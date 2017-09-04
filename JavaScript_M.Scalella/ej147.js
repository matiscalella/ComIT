const usuario = {
    username: 'Batman',
    password: 'Alfred1960KPO!'
};

let autenticarUsuario = function(usuario) {
    if ('Batman' == usuario.username && 'Alfred1960KPO!' == usuario.password){
        return true;
    } else {
        return false;
    }
};

if (autenticarUsuario(usuario) === true) {
    console.log(usuario);
} else {
    console.log('Usuario no autenticado');
};