import { Directive, ElementRef, HostListener, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[lupa]',
  standalone: true
})
export class LupaDirective implements OnInit{
  factorAumento = 1.5;
  sizeFont:number=0;
  colorOriginal:string="";

  @HostBinding("class.bg-danger")
  cambiarFondo:boolean=false;
  @HostBinding("style.color")
  colorTexto="";

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    let tamFte = getComputedStyle(this.el.nativeElement).getPropertyValue("font-size");
    this.sizeFont = Number.parseInt( tamFte.substring(0,tamFte.indexOf('px')) );

    this.colorOriginal = getComputedStyle(this.el.nativeElement).getPropertyValue("color");
  }

  @HostListener('mouseover')
  agrandarElementoHost(){
    this.renderer.setStyle(this.el.nativeElement,'fontSize', (this.sizeFont * this.factorAumento)+'px');
    this.cambiarFondo = true;
    this.colorTexto = "white";
  }

  @HostListener('mouseleave')
  normalizarElementoHost(){
    this.renderer.setStyle(this.el.nativeElement,'fontSize', this.sizeFont + 'px');
    this.cambiarFondo = false;
    this.colorTexto = this.colorOriginal;
  }
}
