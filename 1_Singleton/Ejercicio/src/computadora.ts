import{Marcianos} from './Marcianos';

 export class Computadora{
     private marcianos_computadora;

     constructor() {
         console.log('Se ha creado computadora');
        this.marcianos_computadora= Marcianos.getMarcianos();   
     }

     public creaMarcianos():void {
         this.marcianos_computadora.creaMarcianos();
     }
}