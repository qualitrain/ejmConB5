import { Injectable, EventEmitter } from '@angular/core';
import { IPersona } from '../negocio/ipersona';
import { IServDatPersonas } from './iservDatPersonas';

@Injectable({
  providedIn: 'root'
})
export class ProvDatPersonaMock2Service implements IServDatPersonas{
  static nInstancias:number=0;
  personas:IPersona[]=[];
  nInstancia:number=0;

  notificador:EventEmitter<IPersona>=new EventEmitter();

  constructor() {
    console.log("ProvDatPersonaMock2Service.constructor()");

    this.personas= [
      {idPersona:1001, apPaterno:'Rosas',apMaterno:'Jara',nombres:'Laura',fechaNacAAAAMMDD:'1999-03-17'},
      {idPersona:1002, apPaterno:'Parra',apMaterno:'Romo',nombres:'Felipe',fechaNacAAAAMMDD:'1999-07-12'},
      {idPersona:1003, apPaterno:'Romero',apMaterno:'Lira',nombres:'Julia Antonia',fechaNacAAAAMMDD:'1998-05-06'},
      {idPersona:1004, apPaterno:'Poza',apMaterno:'Sosa',nombres:'Oscar Arturo',fechaNacAAAAMMDD:'2000-00-07'},
      {idPersona:1005, apPaterno:'Arrieta',apMaterno:'Zamora',nombres:'Mariela',fechaNacAAAAMMDD:'2000-09-09'},
      {idPersona:1020, apPaterno:'Pérez',apMaterno:'Vera',nombres:'Jesús',fechaNacAAAAMMDD:'2001-00-05'},
      {idPersona:1031, apPaterno:'Sarmiento',apMaterno:'Estera',nombres:'Teresa',fechaNacAAAAMMDD:'2000-01-30'},
      {idPersona:1024, apPaterno:'Herrera',apMaterno:'Garro',nombres:'Gumaro',fechaNacAAAAMMDD:'1999-06-05'},
      {idPersona:1036, apPaterno:'Morales',apMaterno:'Hinojosa',nombres:'Olga',fechaNacAAAAMMDD:'2000-01-02'},
      {idPersona:1200, apPaterno:'Camacho',apMaterno:'Ibarra',nombres:'Jorge Alberto',fechaNacAAAAMMDD:'2001-02-21'}
    ];

    ProvDatPersonaMock2Service.nInstancias++;
    this.nInstancia = ProvDatPersonaMock2Service.nInstancias;
   }

   get IdInstancia():number {
     return this.nInstancia; 
   }

  getPersonas():IPersona[]{
    return this.personas;
  }

  getPersona(id: number): IPersona | undefined {
    return this.personas.find( (pI,idx,obj) => pI.idPersona === id ? true : false ) ;
  }

  eliminarPersona(persona:IPersona): IPersona | undefined {
    let i:number = this.personas.indexOf(persona);
    if (i===-1)
        return undefined;
    this.personas.splice(i,1);
    this.publicarBaja(persona);
    return persona;
  }

  publicarBaja(persona:IPersona){
    this.notificador.emit(persona);
  }

}
