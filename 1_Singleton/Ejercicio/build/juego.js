"use strict";
const Marcianos_1 = require('./Marcianos');
const Computadora_1 = require('./Computadora');
const Jugador_1 = require('./Jugador');
class Juego {
    constructor() {
        console.log('Se ha iniciado el juego');
    }
    static main() {
        var computadora = new Computadora_1.Computadora(), jugador = new Jugador_1.Jugador(), marcianos_juego = Marcianos_1.Marcianos.getMarcianos();
        jugador.destruirMarciano();
        jugador.destruirMarciano();
        jugador.destruirMarciano();
        computadora.creaMarcianos();
        marcianos_juego.cantidadDeMarcianos();
    }
}
let juego = new Juego();
Juego.main();
//# sourceMappingURL=juego.js.map