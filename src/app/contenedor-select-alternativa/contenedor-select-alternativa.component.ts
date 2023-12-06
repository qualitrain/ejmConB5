import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAlternativaComponent } from '../select-alternativa/select-alternativa.component';
import { ICampo } from '../select-alternativa/icampo';
import { ILayout } from '../select-alternativa/ilayout';

@Component({
  selector: 'app-contenedor-select-alternativa',
  standalone: true,
  imports: [CommonModule, SelectAlternativaComponent],
  templateUrl: './contenedor-select-alternativa.component.html',
  styleUrl: './contenedor-select-alternativa.component.css'
})
export class ContenedorSelectAlternativaComponent {
 
  campoPelicula:ICampo;
  layoutPelicula:ILayout;
  
  valorPelicula:string="";
  tipoSeleccion:string;

  constructor(){
    this.tipoSeleccion = "checkbox";
    this.campoPelicula = {
      nombre:"Pelicula",
      etiquetas:[
                "El laberinto del Fauno",
                "Pinocho",
                "La forma del agua",
                "El espinazo del diablo",
                "Amores Perros"
              ],
      valores:["LabFau","Pinocho","ForAgua","EspDia","AmPerr"]
    }
    this.layoutPelicula = {
      conBorde:true,
      mostrarValores:false,
      tipo:this.tipoSeleccion
    }  
  }

  mostrarValorElegido(evt:any){
    console.log(evt);
    this.valorPelicula = evt;
  }

  actualizarTipoSeleccion(tipoSel:string){
    if(tipoSel !== this.layoutPelicula.tipo){
      this.layoutPelicula.tipo = tipoSel;
      this.valorPelicula = "";
    }
  }
}
