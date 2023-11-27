import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-b5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-b5.component.html',
  styleUrl: './lista-b5.component.css'
})
export class ListaB5Component {
    opciones: string[];
    opciones2:string[] = [];

    constructor() {
      this.opciones = ["Soccer", "Tenis", "Baloncesto", "Boxeo","Atletismo"];
      this.opciones2 = [ "Lunes", "Martes","Miércoles","Jueves","Viernes"];
    }
}
