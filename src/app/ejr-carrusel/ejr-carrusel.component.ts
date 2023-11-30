import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejr-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejr-carrusel.component.html',
  styleUrl: './ejr-carrusel.component.css'
})
export class EjrCarruselComponent implements OnInit {
  imagenes:string[]=[];
  rutaBaseImg='assets/img/';
  nomsImgs=['DSC_7458.JPG','DSC_7517.JPG','DSC_7518.JPG','DSC_7536.JPG','DSC_8004.JPG'];
  imgSeleccionada:boolean[]=[];
  imgActiva:boolean[]=[];
  iImgActiva=0;
  iImgSeleccionada=-1;
  idCarrusel:string="indefinido";

  @Input()
  paramImagenes:string=""
  @Input()
  paramPrimeraImagen:string="";

  constructor(){
    this.idCarrusel = "carrusel_" + this.getIdAleatorio();
    this.inicializarImagenesCarrusel();
    this.imgActiva[this.iImgActiva]=true;
  }

  private inicializarImagenesCarrusel() {
    this.imagenes =[];
    for (let nomImgI of this.nomsImgs) {
      this.imagenes.push(this.rutaBaseImg + nomImgI);
      this.imgActiva.push(false);
      this.imgSeleccionada.push(false);
    }
  }

  ngOnInit(): void {
    if(this.paramImagenes !== ""){
      this.nomsImgs = this.paramImagenes.split(",");
      this.inicializarImagenesCarrusel();
    }
    if(this.paramPrimeraImagen !== ""){
      this.imgActiva[this.iImgActiva]=false;

      this.iImgActiva = Number.parseInt(this.paramPrimeraImagen);
      this.imgActiva[this.iImgActiva]=true;
    }
  }

  seleccionarImagen(i:number){
    if(this.iImgSeleccionada !== -1) //Hay alguna seleccionada previamente
      this.imgSeleccionada[this.iImgSeleccionada] = false;

    if(this.iImgSeleccionada === i) {// Se elije la ya elegida: Anular elección
      this.imgSeleccionada[i] = false;
      this.iImgSeleccionada = -1;
      return;
    }
    
    this.iImgSeleccionada = i;
    this.imgSeleccionada[i] = true;
  }

  getIdAleatorio():number{
    return Math.trunc(Math.random() * 10000);
  }
}
