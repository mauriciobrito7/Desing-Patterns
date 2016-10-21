"use strict";
const Marcianos_1 = require('./Marcianos');
class Jugador {
    constructor() {
        console.log('Se ha creado jugador');
        this.marcianos_jugador = Marcianos_1.Marcianos.getMarcianos();
    }
    destruirMarciano() {
        this.marcianos_jugador.derribaMarcianos();
    }
}
exports.Jugador = Jugador;
//# sourceMappingURL=Jugador.js.map