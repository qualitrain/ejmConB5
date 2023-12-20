import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LupaDirective } from './lupa.directive';

@Component({
  selector: 'app-contenedor-demo-directiva',
  standalone: true,
  imports: [CommonModule, LupaDirective],
  templateUrl: './contenedor-demo-directiva.component.html',
  styleUrl: './contenedor-demo-directiva.component.css'
})
export class ContenedorDemoDirectivaComponent {

}
