const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function(danio){
        this.energia -= danio;
        if (this.energia < 0) {
            this.energia = 0;
        }
    },
    recuperarEnergia: function(energiaRecuperada){
        if (energiaRecuperada >= 0) {
            this.energia += energiaRecuperada;
        }
        if (this.energia > 100) {
            this.energia = 100;
        }
    },
    perderVida: function(){
        this.vidas--;
        if (this.vidas <= 0) {
            this.vidas = 0;
            console.log('GAME OVER: Perdiste todas tus vidas!!');
        }
    },
    recuperarVida: function(){
        this.vidas++;
        if (this.vidas >= 99) {
            this.vidas = 99;
        }
    },
    estadoDelJugador: function(){
        console.log(`El jugador ${this.nombre} tiene ${this.energia}% de energía y ${this.vidas} vidas`)
    }
};

jugador.nombre = 'Megazord';
jugador.estadoDelJugador();

jugador.perderVida();
jugador.estadoDelJugador();
jugador.perderEnergia(10);
jugador.estadoDelJugador();
jugador.perderEnergia(5);
jugador.estadoDelJugador();
jugador.perderEnergia(15);
jugador.estadoDelJugador();
jugador.perderEnergia(20);
jugador.estadoDelJugador();
jugador.recuperarEnergia(10);
jugador.estadoDelJugador();
jugador.perderEnergia(30);
jugador.estadoDelJugador();
jugador.perderEnergia(40);
jugador.estadoDelJugador();
jugador.perderVida();
jugador.estadoDelJugador();
jugador.perderVida();
jugador.estadoDelJugador();
jugador.recuperarVida();
jugador.estadoDelJugador();
jugador.recuperarVida();
jugador.estadoDelJugador();
jugador.recuperarVida();
jugador.estadoDelJugador();
jugador.perderVida();
jugador.estadoDelJugador();