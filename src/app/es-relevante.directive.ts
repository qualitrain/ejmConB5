import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[EsRelevante]',
  standalone: true
})
export class EsRelevanteDirective {
  @HostBinding('style.borderBottom')
  bordeInferior:string="";

  fondoHostOriginal!:string;

  constructor(private el:ElementRef, private renderer:Renderer2){}

  get elem(){
    return this.el;
  }

  @HostListener('mouseenter')
  resaltarHost():void{
    this.fondoHostOriginal = this.el.nativeElement.style.backgroundColor;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.bordeInferior = "2px dotted hsl(10,100%,50%)";
    this.renderer.setStyle(this.el.nativeElement,"cursor","pointer");
  }
  @HostListener('mouseleave')
  normalizarHost():void{
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.fondoHostOriginal);
//   this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    this.bordeInferior = "";
  }
}
