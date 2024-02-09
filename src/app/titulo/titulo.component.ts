import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATOS_EMPRESA } from '../servicios/InyectoresExtra';
import { IEmpresa } from '../servicios/IEmpresa';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
  //,providers: [ { provide:DATOS_EMPRESA, useFactory:getEmpresaMueblera  }]
})
export class TituloComponent {
  @Input()
  titSecundario:string="";
  
  empresa:string="Indefinida";
  rutaLogo:string="";
  
  constructor(
    @Inject( DATOS_EMPRESA )
    private params:IEmpresa)
    {
      this.empresa = params.nombre;
      this.rutaLogo= params.rutaLogo;
    }

}
