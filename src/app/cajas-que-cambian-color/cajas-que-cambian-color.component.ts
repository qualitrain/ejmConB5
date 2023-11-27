import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cajas-que-cambian-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cajas-que-cambian-color.component.html',
  styleUrl: './cajas-que-cambian-color.component.css'
})
export class CajasQueCambianColorComponent{
  cajas:string[] = [];
  colorActCaja:number[] = [];
  nCajas:number = 20;
  colores:string[] = [
        'bg-primary','bg-secondary','bg-info','bg-success','bg-warning','bg-danger', 'bg-dark',
        'bg-primary bg-gradient' , 'bg-secondary bg-gradient','bg-info bg-gradient',
        'bg-success bg-gradient','bg-warning bg-gradient','bg-danger bg-gradient', 'bg-dark bg-gradient',
        'bg-primary bg-opacity-75','bg-secondary bg-opacity-75','bg-info bg-opacity-75',
        'bg-success bg-opacity-75','bg-warning bg-opacity-75','bg-danger bg-opacity-75', 'bg-dark bg-opacity-75',
  ];

  constructor(){
    for(let i=0; i<this.nCajas; i++){
      this.cajas.push('bg-primary');
      this.colorActCaja.push(0);
    }
  }
 
  cambiarColor(iCaja:number){
    this.colorActCaja[iCaja]++;
    let numColor = this.colorActCaja[iCaja] % this.colores.length;
    this.cajas[iCaja] = this.colores[numColor];
  }

  ignorarEvento($event:Event){
    $event.preventDefault();
  }
}
