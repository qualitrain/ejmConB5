import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, filter, interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-ensay-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ensay-pipe.component.html',
  styleUrl: './ensay-pipe.component.css'
})
export class EnsayPipeComponent implements AfterViewInit {
  dias$?:Observable<string>;
  dias:string[]=['lunes','martes','miércoles','jueves','viernes','sábado','domingo']
  diasGenerados:string[]=[];

  ngAfterViewInit(): void {
    this.dias$ = interval(1000).pipe(
 //       tap(num => console.log("interval arroja: " + num)),
        map(num => num % this.dias.length),
        filter(num=> (num != 1)),
        map(iDia => this.dias[iDia]),
        take(20)
    );

    this.dias$.subscribe(dia => { 
      console.log(dia);
      this.diasGenerados.push(dia)
    })
  }


}
