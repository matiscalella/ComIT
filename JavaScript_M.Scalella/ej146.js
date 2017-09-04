const usuario = {
    username: 'Batman',
    password: 'Alfred1960KPO!'
};

let autenticarUsuario = function(nombreDeUsuario, clave) {
    if (nombreDeUsuario == usuario.username && clave == usuario.password){
        return true;
    } else {
        return false;
    }
};

if (autenticarUsuario('Batman', 'Alfred1960KPO!') === true) {
    console.log(usuario);
} else {
    console.log('Usuario no autenticado');
};