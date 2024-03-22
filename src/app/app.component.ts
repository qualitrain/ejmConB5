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
import { AcordeonComponent } from './acordeon/acordeon.component';
import { AcordeonAvzComponent } from './acordeon-avz/acordeon-avz.component';
import { PlantillaNgDirective } from './acordeon-avz/plantilla-ng.directive';
import { ContenedorDemoDirectivaComponent } from './contenedor-demo-directiva/contenedor-demo-directiva.component';
import { ContenedorDemoInyVistaComponent } from './contenedor-demo-iny-vista/contenedor-demo-iny-vista.component';
import { LupaDirective } from './contenedor-demo-directiva/lupa.directive';
import { ContenedorDemoHttpComponent } from './demo-http/contenedor-demo-http/contenedor-demo-http.component';
import { ConsultaPersonasComponent } from './consulta-personas/consulta-personas.component';
import { ContenedorDemoJerarInyComponent } from './contenedor-demo-jerar-iny/contenedor-demo-jerar-iny.component';
import { ContenedorDemoMotorCoreoComponent } from './contenedor-demo-motor-coreo/contenedor-demo-motor-coreo.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { CajaDemoHostComponent } from './caja-demo-host/caja-demo-host.component';
import { TituloComponent } from './titulo/titulo.component';
import { CajaDemoInyectorComponent } from './caja-demo-inyector/caja-demo-inyector.component';
import { TestRxjs01Component } from './demo-rxjs/test-rxjs01/test-rxjs01.component';
import { TestRxjs02Component } from './demo-rxjs/test-rxjs02/test-rxjs02.component';
import { TestRxjs03Component } from './demo-rxjs/test-rxjs03/test-rxjs03.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ListaB5Component, 
    CajasQueCambianColorComponent, 
    SeleccionadorComponent, 
    EjrCarruselComponent,
    EditorPersonasComponent,
    EjrCajaTxtContCaracComponent,
    SelecColorComponent,
    ContenedorSelectAlternativaComponent,
    EjrContenedorListBoxComponent,
    TogglerComponent,
    AcordeonComponent,
    AcordeonAvzComponent,
    PlantillaNgDirective,
    ContenedorDemoDirectivaComponent,
    LupaDirective,
    ContenedorDemoInyVistaComponent,
    ConsultaPersonasComponent,
    ContenedorDemoJerarInyComponent,
    ContenedorDemoMotorCoreoComponent,
    DropDownComponent,
    CajaDemoHostComponent,
    TituloComponent,
    CajaDemoInyectorComponent,
    TestRxjs01Component,
    TestRxjs02Component,
    TestRxjs03Component,

    ContenedorDemoHttpComponent
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

  ejm_EnvioDeHtmlAcomponente_toggler_on              :boolean=false;
  ejr_EnvioDeHtmlAcomponente_acordeon_on             :boolean=false;

  //Inyección desde la vista y desde el html recibido por el componente
  ejm_AttributeDirective_on                          :boolean=false;
  ejm_InyeccionDeElementosDOMdeVistaEnClase_on       :boolean=false;
  ejr_EnvioDeHtmlAcomponente_acordeonAvz_on          :boolean=false;

  //Servicios e Inyección de dependencias
  ejm_InyeccionDependencias2_Instances1service_on    :boolean=false;
  ejm_JerarquiaDeInyeccion_on                        :boolean=false;
  ejm_ServicioComoMotorDeCoreografia_on              :boolean=false;
  ejm_HerenciaDeServiciosYuseExisting_on             :boolean=false;
  ejm_PersonalizandoBusquedaDeInyectores_on          :boolean=false;
  ejm_InyectorPersonalizado_on                       :boolean=false; 

  //RxJs
  ejm_IntroduccionAlosObservablesYelRxJs_on          :boolean=false; //test-rxjs01
  ejm_FuncBasicasCrearObservablesAdaptadores_on      :boolean=false; //test-rxjs02
  ejm_FuncionBindCallback_on                          :boolean=true; //test-rxjs03


  ejm_HttpClient_on                                  :boolean=false;

  textos:string[] = ['ejemplo de texto cualquiera', 
                    'otro texto cualquiera para mostrar la generación dinámica de contenido para alimentar a un componente',
                    'otro texto más (cualquiera) para mostrar la generación dinámica de contenido para alimentar a un componente'
                  ]

}