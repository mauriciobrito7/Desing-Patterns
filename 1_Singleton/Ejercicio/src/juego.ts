import{Marcianos} from './Marcianos';
import{Computadora} from './Computadora';
import{Jugador} from './Jugador';

class Juego{
    constructor(){
        console.log('Se ha iniciado el juego');
    }

    public static main(): void{
        var computadora = new Computadora(),
            jugador = new Jugador(),
            marcianos_juego=Marcianos.getMarcianos();

        jugador.destruirMarciano();
        jugador.destruirMarciano();        
        jugador.destruirMarciano();                
        computadora.creaMarcianos();
        marcianos_juego.cantidadDeMarcianos();              
    }

}

let juego =new Juego();
Juego.main();