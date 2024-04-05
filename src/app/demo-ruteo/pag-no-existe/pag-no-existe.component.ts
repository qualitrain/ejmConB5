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
    let parent = this.getUrlParent();
    this.rutaNoSoportada += "/" + parent + fragsUrl.map(frI => frI.path)
                                         .join("/");
  }

  getUrlParent():string{ // No recursiva !
    let parent:string | undefined = this.rutaActiva.parent?.snapshot.url.map(frI => frI.path).join("/");
    if(parent){
      parent +="/";
    }
    else
      parent ="";

    return parent
  }

  irAlaRaiz(){
    this.ruteador.navigate(['/']);
  }

}
