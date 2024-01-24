import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvDatPersonaMockService } from '../servicios/prov-dat-persona-mock.service';
import { ProvDatPersonaMock2Service } from '../servicios/prov-dat-persona-mock2.service';
import { ConsultaPersonasComponent } from '../consulta-personas/consulta-personas.component';

@Component({
  selector: 'app-contenedor-demo-jerar-iny',
  standalone: true,
  imports: [
    CommonModule,
    ConsultaPersonasComponent
  ],
  templateUrl: './contenedor-demo-jerar-iny.component.html',
  styleUrl: './contenedor-demo-jerar-iny.component.css',
  providers:[ ProvDatPersonaMockService ]
//  providers:[{ provide:ProvDatPersonaMockService, useClass:ProvDatPersonaMock2Service }]
})
export class ContenedorDemoJerarInyComponent {
  constructor(){
    console.log("ContenedorComponent.contructor()");
  }

}
