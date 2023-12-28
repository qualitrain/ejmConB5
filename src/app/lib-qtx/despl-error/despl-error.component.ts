import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { IParamsAviso } from './IParamsAviso';

@Component({
  selector: 'app-despl-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './despl-error.component.html',
  styleUrl: './despl-error.component.css'
})
export class DesplErrorComponent 
       implements OnInit, DoCheck {
  avisoConfirmado:boolean;
  avisoLeido:boolean;

  @Input()
  params:IParamsAviso={
    tipo : '',
    descripcion: '',
    sugerencia: ''
  };
  
  constructor() {
    this.avisoLeido = false;
    this.avisoConfirmado = false;
  }
  
  ngOnInit(): void {
    if(this.params === undefined){
      this.params = {
        tipo : 'Error',
        descripcion: 'Aquí va la descripción',
        sugerencia: 'Aquí va la sugerencia'
      }
    }
    else
    if(this.params.descripcion === undefined)
      this.params.descripcion = "";
    else
    if(this.params.sugerencia === undefined)
      this.params.sugerencia = "";
    else
    if(this.params.tipo === undefined)
      this.params.tipo = "Aviso";
  }
  ngDoCheck(): void {
    if(this.avisoConfirmado == false)
        return;
    //aviso ya confirmado: el usuario hizo click en boton de ok
    if(this.avisoLeido){ //Ya despareció la vista en al iteración anterior
      this.avisoConfirmado = false;
      this.avisoLeido = false;
    }
    else // Aún no se ha actualizado la vista, el aviso no ha desaparecido aún
      this.avisoLeido = true;
  }
      
  atenderOK():void{
    this.avisoConfirmado = true;
  }       
}
