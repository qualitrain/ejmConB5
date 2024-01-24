import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvDatPersonaMockService } from '../servicios/prov-dat-persona-mock.service';
import { IPersona } from '../negocio/ipersona';


@Component({
  selector: 'app-notificador-baja',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './notificador-baja.component.html',
  styleUrl: './notificador-baja.component.css'
})
export class NotificadorBajaComponent {
  nBajas=0;
  listaBajas:string[]=[];
  bajas:string="";
  mostrarBajas:boolean=false;

  constructor(private motorEventos:ProvDatPersonaMockService){
    motorEventos.notificador
                .subscribe(bajaI => this.procesarBaja(bajaI) )
  }
  
  procesarBaja(bajaI:IPersona):void{
    this.nBajas++;
    this.listaBajas.push(bajaI.nombres + " " + bajaI.apPaterno 
                         + " (" + bajaI.idPersona + ")"); 
    this.bajas =  this.listaBajas.join(", ");
  }

}
