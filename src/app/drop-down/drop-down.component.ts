import { Component, Host, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGestorOpcionesService } from '../servicios/IGestorOpciones';
import { GestorOpcionesLibroService } from "../servicios/GestorOpcionesLibro.service";
import { GestorOpcionesDemoIDService } from "../servicios/GestorOpcionesDemoID.service";

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css',
//  providers:[GestorOpcionesDemoIDService]
//  providers:[{provide:IGestorOpcionesService,useExisting:GestorOpcionesLibroService}]
  providers:[{provide:IGestorOpcionesService,useExisting:GestorOpcionesDemoIDService}]
//  providers:[{provide:GestorOpcionesDemoIDService,useClass:GestorOpcionesLibroService}]
})
export class DropDownComponent {
  nombreBoton:string="Indefinido";
  nombreServicio:string="Indefinido";
  nomOpciones:string[]=["opcion 0", "opcion 1"];
  hRefOpciones:string[]=["#","#"];
  nInstancia:number=0;
  id:string="dropDown_XX";

 
  constructor(
  //  @Host() // Terminar busqueda en Host
  //  @SkipSelf() //Empezar busqueda en el padre
  //  @Optional()
  private provDropDown:IGestorOpcionesService) {
//    private provDropDown:GestorOpcionesDemoIDService) {
      if(provDropDown){
        this.nombreBoton = provDropDown.getNombreBoton();
        this.nomOpciones = provDropDown.getNombresOpciones();
        this.hRefOpciones = provDropDown.getLinks();
        this.nInstancia = provDropDown.getNinstancia();
        this.nombreServicio = provDropDown.getNombre();
        this.id = this.getId();
       }
  }
  getId():string{
    return "dropDown_" + Math.trunc( Math.random() * 1000);
  }
  publicarEleccion(opcionElegida:string){
    this.provDropDown.publicar(opcionElegida);
  }
 
}
