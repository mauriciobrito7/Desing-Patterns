/*Crearemos un juego donde la Clase Marcianos será creada como singleton
para que desde otras clases sea llamada y todas tengan la misma información
de marcianos existentes en el juego.*/
"use strict";
class Marcianos {
    constructor() {
        //Números de marcianos al inicio
        this.cantidad = 10;
        if (Marcianos._marciano) {
            throw new Error("Error: La instanciación fallo, use Marcianos.crearMarcianos para crear una nueva instancia");
        }
        Marcianos._marciano = this;
    }
    static getMarcianos() {
        if (Marcianos._marciano === null) {
            Marcianos._marciano = new Marcianos();
        }
        return Marcianos._marciano;
    }
    derribaMarcianos() {
        console.log('Soy el bueno, derribe un marciano');
        if (this.cantidad > 0)
            this.cantidad--;
    }
    creaMarcianos() {
        if (this.cantidad > 0)
            this.cantidad++;
    }
    cantidadDeMarcianos() {
        if (this.cantidad > 0)
            console.log('Quedan en el juego ' + this.cantidad + ' marcianos');
        else
            console.log('Felicidades, has ganados!!!');
    }
}
//Unico objeto
Marcianos._marciano = null;
exports.Marcianos = Marcianos;
//# sourceMappingURL=Marcianos.js.map