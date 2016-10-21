import{Marcianos} from './Marcianos';

export class  Jugador{
    private marcianos_jugador;

    constructor() {
        console.log('Se ha creado jugador');
        this.marcianos_jugador= Marcianos.getMarcianos();
     }
    public destruirMarciano():void{
        this.marcianos_jugador.derribaMarcianos();
    }
}

