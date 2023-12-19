import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { EsRelevanteDirective } from '../es-relevante.directive';

@Component({
  selector: 'app-contenedor-demo-iny-vista',
  standalone: true,
  imports: [
    CommonModule,
    TarjetaComponent,
    EsRelevanteDirective
  ],
  templateUrl: './contenedor-demo-iny-vista.component.html',
  styleUrl: './contenedor-demo-iny-vista.component.css'
})
export class ContenedorDemoInyVistaComponent {
  pruebaInyeccView:string="false";
  pruebaInyeccContent:string="false";
  pruebaInyeccContDir:string="false";

  configurarPruebaInyecElemDOM(evt:Event){
    //  console.log("appComponent.configurarPruebaInyecElemDOM")
      let chkPruebaInyeccion:HTMLInputElement = evt.target as HTMLInputElement;
    //  console.log(chkPruebaInyeccion.id + ":" + chkPruebaInyeccion.checked);
      switch(chkPruebaInyeccion.id){
        case 'cbxView':
          if(chkPruebaInyeccion.checked)
             this.pruebaInyeccView="true";
          else
             this.pruebaInyeccView="false";
          break;
        case 'cbxContent':
          if(chkPruebaInyeccion.checked)
            this.pruebaInyeccContent ="true";
          else
            this.pruebaInyeccContent="false";
         break;
       case 'cbxContDir':
          if(chkPruebaInyeccion.checked)
            this.pruebaInyeccContDir ="true";
          else
            this.pruebaInyeccContDir="false";
         break;
      }
    }
  
}
