"use strict";
const Marcianos_1 = require('./Marcianos');
class Computadora {
    constructor() {
        console.log('Se ha creado computadora');
        this.marcianos_computadora = Marcianos_1.Marcianos.getMarcianos();
    }
    creaMarcianos() {
        this.marcianos_computadora.creaMarcianos();
    }
}
exports.Computadora = Computadora;
//# sourceMappingURL=computadora.js.map