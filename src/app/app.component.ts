import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaB5Component } from './lista-b5/lista-b5.component';
import { CajasQueCambianColorComponent } from './cajas-que-cambian-color/cajas-que-cambian-color.component';
import { SeleccionadorComponent } from './seleccionador/seleccionador.component';
import { EjrCarruselComponent } from './ejr-carrusel/ejr-carrusel.component';
import { EditorPersonasComponent }from './editor-personas/editor-personas.component';
import { EjrCajaTxtContCaracComponent } from './ejr-caja-txt-cont-carac/ejr-caja-txt-cont-carac.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    ListaB5Component, 
    CajasQueCambianColorComponent, 
    SeleccionadorComponent, 
    EjrCarruselComponent,
    EditorPersonasComponent,
    EjrCajaTxtContCaracComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Proyecto demo de Angular 17';
  ejm_directiva_for_listaB5_on=false;
  ejr_for_estado_componente_on=false;
  ejm_param_entrada_seleccionador_on=false;
  ejr_params_carrusel_on=false;
  ejm_binding_bidireccional_ngModel_editorPersonas_on=true;
  ejr_binding_bidireccional_CajaTxtContCarac_on=true;
}
