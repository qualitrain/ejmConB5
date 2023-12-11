import { Component, ContentChildren, Input, OnInit, TemplateRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantillaNgDirective } from './plantilla-ng.directive';

@Component({
  selector: 'app-acordeon-avz',
  standalone: true,
  imports: [CommonModule, PlantillaNgDirective],
  templateUrl: './acordeon-avz.component.html',
  styleUrl: './acordeon-avz.component.css'
})
export class AcordeonAvzComponent {
  id_acordeon:string="";
  idsElementos:string[]=[];

  nombresElementos:string[]=[];
  mostrarElemAlInicio:boolean[]=[];

  @Input()
  pElementos:string="";

  @Input()
  pExpandir:string="";

  @ContentChildren(PlantillaNgDirective,{read:TemplateRef})
  templates:TemplateRef<any>[]=[];

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
      this.idsElementos.push("idElem_" + i + this.getIntRandom());
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
