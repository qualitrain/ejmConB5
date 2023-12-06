import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEstado } from './iestado';

@Component({
  selector: 'app-ejr-list-box-edo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejr-list-box-edo.component.html',
  styleUrl: './ejr-list-box-edo.component.css'
})
export class EjrListBoxEdoComponent {
  @Output()
  eeNvoEstado:EventEmitter<IEstado>;

  estados:string[]= [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chihuahua',

    'Chiapas',
    'Coahuila',
    'Colima',
    'Ciudad de México',
    'Durango',

    'Estado de México',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',

    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',

    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ];
  abrevEstados = [
    'AGS', // Aguascalientes
    'BC',  // Baja California
    'BCS', // Baja California Sur
    'CAM', // Campeche
    'CHH', // Chihuahua

    'CHI', // Chiapas
    'COA', // Coahuila
    'COL', // Colima
    'CDMX',// Ciudad de México
    'DUR', // Durango
    
    'MEX', // Estado de México
    'GUA', // Guanajuato
    'GRO', // Guerrero
    'HID', // Hidalgo
    'JAL', // Jalisco

    'MIC', // Michoacán
    'MOR', // Morelos
    'NAY', // Nayarit
    'NL',  // Nuevo León
    'OAX', // Oaxaca

    'PUE', // Puebla
    'QRO', // Querétaro
    'ROO', // Quintana Roo
    'SLP', // San Luis Potosí
    'SIN', // Sinaloa

    'SON', // Sonora
    'TAB', // Tabasco
    'TAM', // Tamaulipas
    'TLAX',// Tlaxcala
    'VER', // Veracruz
    'YUC', // Yucatán
    'ZAC'  // Zacatecas
  ];
  i:number=0;
  resultado:IEstado={abrev:'',nombre:''};

constructor(){
  this.eeNvoEstado = new EventEmitter<IEstado>();
}
  
  procesarEleccion(evt:Event){
    this.i = Number.parseInt( (evt.target as HTMLSelectElement).value);
    this.resultado = {
      abrev:this.abrevEstados[this.i],
      nombre:this.estados[this.i]
    }
    this.eeNvoEstado.emit(this.resultado);
  }
  
}
