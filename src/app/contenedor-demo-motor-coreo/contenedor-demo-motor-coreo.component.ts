import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvDatPersonaMockService } from '../servicios/prov-dat-persona-mock.service';
import { ProvDatPersonaMock2Service } from '../servicios/prov-dat-persona-mock2.service';
import { ConsultaPersonasComponent } from '../consulta-personas/consulta-personas.component';
import { NotificadorBajaComponent } from '../notificador-baja/notificador-baja.component';

@Component({
  selector: 'app-contenedor-demo-motor-coreo',
  standalone: true,
  imports: [
    CommonModule,
    ConsultaPersonasComponent,
    NotificadorBajaComponent
  ],
  templateUrl: './contenedor-demo-motor-coreo.component.html',
  styleUrl: './contenedor-demo-motor-coreo.component.css',
  providers:[ ProvDatPersonaMockService ]
//  providers:[{ provide:ProvDatPersonaMockService, useClass:ProvDatPersonaMock2Service }]
})
export class ContenedorDemoMotorCoreoComponent implements OnInit{
  @Input()
  notificarBajas:string="false";
  
  notificacionesOn:boolean=false;

  constructor(){
    console.log("ContenedorComponent.contructor()");
  }

  ngOnInit(): void {
   if(this.notificarBajas==="true"){
     this.notificacionesOn = true;
   }
  }
}
