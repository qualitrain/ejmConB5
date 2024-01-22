import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPersona } from '../negocio/ipersona';
import { ProvDatPersonaMockService } from '../servicios/prov-dat-persona-mock.service';

@Component({
  selector: 'app-consulta-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-personas.component.html',
  styleUrl: './consulta-personas.component.css'
  //,providers:[ProvDatPersonaMockService]
})
export class ConsultaPersonasComponent {
  personas:IPersona[]=[];
  nInstanciaServicio:number=0;

  constructor(private provDatosInyectado: ProvDatPersonaMockService) { 
    this.personas = this.provDatosInyectado.getPersonas();
    this.nInstanciaServicio = this.provDatosInyectado.IdInstancia;
    console.log("ConsultaPersonasComponent.contructor()");
    // this.personas queda apuntando al arreglo declarado en el servicio !!
  }

  getNombreCompleto(persona:IPersona):string{
    return  persona.apPaterno + " " + persona.apMaterno + " " + persona.nombres;
  }

  eliminarPersona(personaI:IPersona){
    this.provDatosInyectado.eliminarPersona(personaI);
  }

}
