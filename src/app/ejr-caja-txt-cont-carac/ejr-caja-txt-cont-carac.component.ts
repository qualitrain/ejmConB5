import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejr-caja-txt-cont-carac',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejr-caja-txt-cont-carac.component.html',
  styleUrl: './ejr-caja-txt-cont-carac.component.css'
})
export class EjrCajaTxtContCaracComponent implements OnInit{
  nCaracteres:number=0;
  limiteMensaje:number=50;
  mensaje:string="";
  idCaja:string="";

  constructor(){
    this.idCaja = "idCaja_" + Math.trunc( Math.random() * 1000);
  }
  
  @Input()
  paramLimiteMsg:string="";
  
  ngOnInit(): void {
    if(this.paramLimiteMsg !== "")
      this.limiteMensaje = Number.parseInt(this.paramLimiteMsg);
  }  

  validarLongitud($event:Event){
    if(this.mensaje.length >= this.limiteMensaje){
      this.mensaje = this.mensaje.substring(0,this.limiteMensaje);   
      ($event.target as HTMLTextAreaElement).value = this.mensaje;     
    }
  }
}
