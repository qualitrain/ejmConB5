import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggler.component.html',
  styleUrl: './toggler.component.css'
})
export class TogglerComponent {
  @Input()
  etiquetaUno:string="Uno";
  @Input()
  etiquetaDos:string="Dos";

}
