import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acordeon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css'
})
export class AcordeonComponent implements OnInit{
  id_acordeon:string="";
  idsElemento:string[]=[];

  nombresElementos:string[]=[];
  mostrarElemAlInicio:boolean[]=[];

  @Input()
  pElementos:string="";

  @Input()
  pExpandir:string="";

  constructor(){
    this.id_acordeon ="idAcor_" + this.getIntRandom();
  }

  ngOnInit(): void {
    //Obtener nombres de elementos desde los parámetros
    this.nombresElementos = this.pElementos.split(",");

    //Configurar elementos del acordeón, con base en parámetros, que se mostrarán o no, expandidos desde el principio
    let mostrarElem:boolean[]=[];
    for(let pMostrarI of this.pExpandir.split(",")){
      if(pMostrarI === "true")
        mostrarElem.push(true);
      else
        mostrarElem.push(false);
    }

    //Configurar ids de los elementos del acordeón y si se muestran de inicio, o no.
    for(let i=0; i<this.nombresElementos.length;i++){
      this.idsElemento.push("idElem_" + i + this.getIntRandom());
      if(mostrarElem[i])
        this.mostrarElemAlInicio[i] = true;
      else
        this.mostrarElemAlInicio[i] = false;
    }
  }

  getIntRandom():number{
    return Math.trunc( Math.random() * 10000 );
  }

}
