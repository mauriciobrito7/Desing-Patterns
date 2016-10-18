//---SINGLETON---
/*
    Asegurarse de tener un solo objeto para todas las solicitudes.
    No permitir crear más de un solo objeto asi algún programa lo solicite
*/

class Singleton {
        public contador: number = 0;
        private static _singleton: Singleton = null;

        //El constructor debe ser privado para que no pueda ser instanciada
        private constructor() {
            //Como en typescript no existe final tenemos que comprobar cuando se haya creado otro objeto
            if (Singleton._singleton) {
                throw new Error("Error: La instanciación fallo");
            }

            Singleton._singleton = this;
            //Comprobamos que solo se crea una vez
            console.log('He sido creado');
        }

        public static get current(): Singleton {
            if (Singleton._singleton === null) {
                Singleton._singleton = new Singleton();
            }
            Singleton._singleton.contador++;
            return Singleton._singleton;
        }

        public mostrar() {
            console.log("El singleton contadaor:" + this.contador);
        }
    }
    //Todos van a tener el contenido de un solo objeto
    //---Prueba del singleton---
    var singleton1 = Singleton.current;
    singleton1.mostrar();
    var singleton2 = Singleton.current;
    singleton2.mostrar();