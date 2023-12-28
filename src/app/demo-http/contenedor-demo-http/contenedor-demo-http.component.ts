import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPersonaHttpComponent } from '../consulta-persona-http/consulta-persona-http.component';

@Component({
  selector: 'app-contenedor-demo-http',
  standalone: true,
  imports: [
    CommonModule,
    ConsultaPersonaHttpComponent
  ],
  templateUrl: './contenedor-demo-http.component.html',
  styleUrl: './contenedor-demo-http.component.css'
})
export class ContenedorDemoHttpComponent {
  arquitecturaHttpClientBasicaOn:boolean = true;
  ejmGetPersonaOn:boolean=true;
  ejmGetPersonasOn:boolean=true;
  getDetalladoYmanejoErroresOn:boolean = true; 
  
  constructor(){

  }
}
