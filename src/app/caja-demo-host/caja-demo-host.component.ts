import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestorOpcionesAnimalService } from '../servicios/GestorOpcionesAnimal.service';
import { GestorOpcionesDemoIDService } from '../servicios/GestorOpcionesDemoID.service';
import { GestorOpcionesLibroService } from '../servicios/GestorOpcionesLibro.service';
import { DropDownComponent } from '../drop-down/drop-down.component';

@Component({
  selector: 'app-caja-demo-host',
  standalone: true,
  imports: [
    CommonModule,
    DropDownComponent
  ],
  templateUrl: './caja-demo-host.component.html',
  styleUrl: './caja-demo-host.component.css',
  providers:[ 
    { provide:GestorOpcionesDemoIDService, useClass:GestorOpcionesAnimalService },
  ],
  viewProviders:[ 
    { provide:GestorOpcionesDemoIDService, useClass:GestorOpcionesLibroService },
  ]
})
export class CajaDemoHostComponent {

}
