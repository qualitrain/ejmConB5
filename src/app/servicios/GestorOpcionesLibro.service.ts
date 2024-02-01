import { Injectable, EventEmitter } from '@angular/core';
import { IGestorOpcionesService } from './IGestorOpciones';

@Injectable({
    providedIn: 'root'
})
export class GestorOpcionesLibroService extends IGestorOpcionesService{
    nombreBoton:string="Libro";
    opciones:string[]=["Alta","Consulta","Edición","Baja"];
    linksOpciones:string[]=["#InDep04","#InDep04","#InDep04","#InDep04"];
    static nInstancias=0;

    getNinstancia(): number {
        return GestorOpcionesLibroService.nInstancias;
    }
    constructor(){  
        super();
        GestorOpcionesLibroService.nInstancias++;
    }
    getNombreBoton():string{
        return this.nombreBoton;
    }
    getNombresOpciones():string[]{
        return this.opciones;
    }
    getLinks():string[]{
        return this.linksOpciones;
    }

    override getNombre(): string {
        return "GestorOpcionesLibro";
    }
}