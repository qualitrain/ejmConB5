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
  titulo = 'Demo de Angular 17 [ejmConB5]';

  ejm_directiva_for_interpolacion_listaB5_on         :boolean=false;
  ejr_for_estado_componente_on                       :boolean=false;

  ejm_param_entrada_y_classBinding_seleccionador_on  :boolean=false;
  ejr_params_carrusel_on                             :boolean=false;

  ejm_binding_bidireccional_ngModel_editorPersonas_on:boolean=true;
  ejr_binding_bidireccional_CajaTxtContCarac_on      :boolean=true;

  ejm_elStyleBindingYelEventoClickOn           :boolean=true;
 
}
