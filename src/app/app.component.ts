import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaB5Component } from './lista-b5/lista-b5.component';
import { CajasQueCambianColorComponent } from './cajas-que-cambian-color/cajas-que-cambian-color.component';
import { SeleccionadorComponent } from './seleccionador/seleccionador.component';
import { EjrCarruselComponent } from './ejr-carrusel/ejr-carrusel.component';
import { EditorPersonasComponent }from './editor-personas/editor-personas.component';
import { EjrCajaTxtContCaracComponent } from './ejr-caja-txt-cont-carac/ejr-caja-txt-cont-carac.component';
import { SelecColorComponent } from './selec-color/selec-color.component';
import { ContenedorSelectAlternativaComponent } from './contenedor-select-alternativa/contenedor-select-alternativa.component';
import { EjrContenedorListBoxComponent } from './ejr-contenedor-list-box/ejr-contenedor-list-box.component';
import { TogglerComponent } from './toggler/toggler.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    ListaB5Component, 
    CajasQueCambianColorComponent, 
    SeleccionadorComponent, 
    EjrCarruselComponent,
    EditorPersonasComponent,
    EjrCajaTxtContCaracComponent,
    SelecColorComponent,
    ContenedorSelectAlternativaComponent,
    EjrContenedorListBoxComponent,
    TogglerComponent
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

  ejm_binding_bidireccional_ngModel_editorPersonas_on:boolean=false;
  ejr_binding_bidireccional_CajaTxtContCarac_on      :boolean=false;

  ejm_elStyleBindingYelEventoClick_on                :boolean=false;
 
  ejm_componentesQueDevuelvenValores_on              :boolean=false;
  ejr_componentesQueDevuelvenVals_listbox_on         :boolean=false;

  ejm_EnvioDeHtmlAcomponente_toggler_on              :boolean=true;
  ejr_EnvioDeHtmlAcomponente_acordeon_on             :boolean=false;

}
