import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-pag-no-existe',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pag-no-existe.component.html',
  styleUrl: './pag-no-existe.component.css'
})
export class PagNoExisteComponent  implements OnInit{
  rutaNoSoportada:string="";

  constructor(private rutaActiva:ActivatedRoute, 
              private ruteador:Router)
  {}

  ngOnInit(): void {
    this.rutaActiva.url.subscribe( frag => this.procesarUrl(frag))
  }

  procesarUrl(fragsUrl:UrlSegment[]){
    this.rutaNoSoportada = "/" + fragsUrl.map(frI => frI.path)
                                         .join("/");
  }

  irAlaRaiz(){
    this.ruteador.navigate(['/']);
  }

}
