import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjrListBoxEdoComponent } from '../ejr-list-box-edo/ejr-list-box-edo.component';
import { IEstado } from '../ejr-list-box-edo/iestado';

@Component({
  selector: 'app-ejr-contenedor-list-box',
  standalone: true,
  imports: [CommonModule, EjrListBoxEdoComponent],
  templateUrl: './ejr-contenedor-list-box.component.html',
  styleUrl: './ejr-contenedor-list-box.component.css'
})
export class EjrContenedorListBoxComponent {

  mensaje:string=""
  procesarEstado(evt:IEstado){
    this.mensaje = "El estado elegido fue " + evt.nombre + " (" + evt.abrev + ")";
  }

}
