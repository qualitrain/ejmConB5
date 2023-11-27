import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaB5Component } from './lista-b5/lista-b5.component';
import { CajasQueCambianColorComponent } from './cajas-que-cambian-color/cajas-que-cambian-color.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaB5Component, CajasQueCambianColorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Proyecto demo de Angular 17';
}
