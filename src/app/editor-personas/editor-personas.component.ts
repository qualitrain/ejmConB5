import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IPersona } from './ipersona';

@Component({
  selector: 'app-editor-personas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editor-personas.component.html',
  styleUrl: './editor-personas.component.css'
})
export class EditorPersonasComponent {
  funcionActual : string;
  persona : IPersona;
  constructor() { 
    this.persona = {
      idPersona:0,
      apPaterno:"Apellido01",
      apMaterno:"Apellido02",
      nombres:"Nombre01",
      fechaNacAAAAMMDD:""
    }
    this.funcionActual = "Alta de Personas";
  }
  reiniciarFormulario(){
    this.persona.apPaterno = "Ap. Paterno";
    this.persona.apMaterno = "Ap. Materno";
    this.persona.nombres = "Nombre(s)"
  }
}
