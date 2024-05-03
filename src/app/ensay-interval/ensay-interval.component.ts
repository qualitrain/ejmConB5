import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-ensay-interval',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ensay-interval.component.html',
  styleUrl: './ensay-interval.component.css'
})
export class EnsayIntervalComponent implements AfterViewInit, OnDestroy{
  pulsos:Observable<number> = interval(1000);
  numero:number=0;
  numeros:number[]=[]
  ritmo:number = 1000;
  suscripciones:Subscription[] = [];
  divContadores?:HTMLDivElement;
  sucripClicks?:Subscription;
  
  ngAfterViewInit(): void {
    this.divContadores = document.getElementById("divContadores") as HTMLDivElement;

    this.sucripClicks= fromEvent(this.divContadores,'click').subscribe(evt=>this.eliminarContador())
  }
  ngOnDestroy(): void {
    for(let suscripI of this.suscripciones)
      suscripI.unsubscribe();
    this.sucripClicks?.unsubscribe();
  }

  eliminarContador(): void {
    if(this.suscripciones.length == 0)
       return;
    this.suscripciones.pop()?.unsubscribe();
//    this.numeros.pop();
  }

  arrancarConteo(){
    this.numeros.push(0);
    let idx = this.numeros.length - 1;
    let suscripI = interval(this.ritmo).subscribe(val => { 
      this.numeros[idx] = val + 1;
    });
    this.suscripciones.push(suscripI)

    if(this.ritmo > 50)
        this.ritmo -= 50;
  }
}
