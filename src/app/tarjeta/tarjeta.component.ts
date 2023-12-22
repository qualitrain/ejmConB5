import { 
          Component, 
          Input, 
          OnChanges, AfterViewInit, AfterContentInit, 
          ViewChild, ViewChildren, 
          ContentChild, ContentChildren,
          QueryList, 
          ElementRef,
          Directive, 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsRelevanteDirective } from '../es-relevante.directive';

@Directive({
  selector: '[Accion]',
  standalone: true
})
export class AccionDirective {
  constructor(private hospedador:ElementRef){}

  get elem():ElementRef{
    return this.hospedador;
  }
}


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule, AccionDirective],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent implements AfterViewInit, AfterContentInit, OnChanges{
  ancho:number=22;

  @Input()
  debug:string="false";
  debugOn:boolean=false;

  @Input()
  demoView:string="false";
  demoViewOn:boolean=false;

  @Input()
  demoContent:string="false";
  demoContentOn:boolean=false;

  @Input()
  demoContentDirectiva:string="false";
  demoContentDirectivaOn:boolean=false;

  @Input()
  titulo:string="Título";
  @Input()
  accion:string="Hacer Algo";
  @Input()
  link:string="#";
  @Input()
  imagen:string=""
  
  @ViewChild("elemImagen")
  elemImagen!:ElementRef;

  urlImagen:string="";

  @ViewChildren(AccionDirective)
  botonesLink!:QueryList<ElementRef>;

  urlsAccion:string="";

  @ContentChild("titListaRelevante")
  elemNgContent!:ElementRef;

  titRelevante:string="";

  // Inyectará los elementos DOM del ng-content con #Relevante. Este uso está documentado
  // en diversos sitios en internet y funciona. Sin embargo, parte de la premisa de que se permiten
  // variables de template duplicadas (lo que aparentemente es un error)
  @ContentChildren('Relevante')
  elemsRelevantes!:QueryList<ElementRef>;

  textRelevante:string="";

  // Inyectar elementos que correspondan con la directiva indicada
  @ContentChildren(EsRelevanteDirective, {descendants: true})
  elemsDirRelevantes!:QueryList<ElementRef>;

  textosDirEsRelevante:string="";

  ngOnChanges():void {
//    console.log("***************** ngOnChanges() *****************");
    this.prenderOapagarDemos();
  }

  prenderOapagarDemos(){
    if(this.debug ==="true")
      this.debugOn = true;
    else
      this.debugOn = false;

    if(this.demoView ==="true")
      this.demoViewOn = true;
    else
      this.demoViewOn = false;

    if(this.demoContent ==="true")
      this.demoContentOn = true;
    else
      this.demoContentOn = false;

      if(this.demoContentDirectiva ==="true")
      this.demoContentDirectivaOn = true;
    else
      this.demoContentDirectivaOn = false;

  }
  
  ngAfterViewInit(): void {
    // console.log("***** TarjetaComponent.ngAfterViewInit() *****");
    // ---------------- Mostrando valores de elemento inyectado @ViewChild ----------------

    /* 
    Se debe hacer así para evitar errores modificando una vista que ya estaba rendereada: Se forma el 
    cambio para hacerse en el siguiente ciclo de procesamiento de eventos
    */
    setTimeout(()=>this.urlImagen = this.elemImagen.nativeElement.src,0);

    // ---------------- Mostrando valores de elementos inyectados @ViewChildren ----------------
    // console.log(this.botonesLink);

    let urlsBtnsAccion:string[]=[];
    this.botonesLink.map( refI  => refI as unknown as AccionDirective)
                    .map(direcI => direcI.elem.nativeElement as HTMLAnchorElement)
                    .map( link  => link.href)
                    .forEach( urlI => urlsBtnsAccion.push(urlI) );

    setTimeout(()=>this.urlsAccion = urlsBtnsAccion.join(", "),0);
  }

  ngAfterContentInit():void{
//    console.log("***************** ngAfterContentInit() *****************")
    // ---------------- Mostrando valores de elemento inyectado @ContentChild ----------------
    let div:HTMLDivElement = this.elemNgContent.nativeElement;
    setTimeout(()=>this.titRelevante = div.innerText,0);

    // ---------------- Mostrando valores de elementos inyectados @ContentChildren ----------------
    let textosRelevantes:string[]=[];
    this.elemsRelevantes.forEach( elemI => textosRelevantes.push(elemI.nativeElement.innerText));
    this.textRelevante = textosRelevantes.join(" / ");

// ---- Mostrando valores de elementos inyectados @ContentChildren que corresponden con una directiva ----
    let textosDirRelevante:string[]=[];
    
    this.elemsDirRelevantes.forEach( elemI => {
      let directivaI:EsRelevanteDirective = elemI as unknown as EsRelevanteDirective;
      textosDirRelevante.push(directivaI.elem.nativeElement.innerText);
    });
    setTimeout( ()=>this.textosDirEsRelevante = textosDirRelevante.join(", "),0);
  }

}
