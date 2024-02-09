import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from '../titulo/titulo.component';
import { DATOS_EMPRESA } from '../servicios/InyectoresExtra';
import { IEmpresa } from '../servicios/IEmpresa';

let getEmpresaMueblera = function():IEmpresa{
  return {
    nombre:"Mueblería Zaza", 
    razonSocial:"Muebles Campiranos S.A.",
    rutaLogo:"./assets/img/sillon.png"
  };
}

@Component({
  selector: 'app-caja-demo-inyector',
  standalone: true,
  imports: [
    CommonModule,
    TituloComponent
  ],
  templateUrl: './caja-demo-inyector.component.html',
  styleUrl: './caja-demo-inyector.component.css'
  ,providers: [ { provide:DATOS_EMPRESA, useFactory:getEmpresaMueblera  }]

})
export class CajaDemoInyectorComponent {

}
