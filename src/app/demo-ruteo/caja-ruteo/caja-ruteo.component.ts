import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-caja-ruteo',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './caja-ruteo.component.html',
  styleUrl: './caja-ruteo.component.css'
})
export class CajaRuteoComponent {

}
