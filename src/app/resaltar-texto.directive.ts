import { Directive, HostBinding, HostListener, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltarTexto]'
})
export class ResaltarTextoDirective implements OnChanges {

  @Input() longitudTexto = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // TODO: Validate the css property to set
  @HostBinding('style.backgroundColor') highlightColor: string;

  @HostListener('keyup') enterdata(eventData: Event) {
    // TODO: Implement highlight of data
    
  }

  // TODO: Validar la opcion de un observable sobre el tamaño del texto y utilizar mecanismo de change detection on OnPush

  ngOnChanges(changes: SimpleChanges) {
    if(changes.longitudTexto) {
      console.log(this.elementRef.nativeElement.childNodes);      
      
      for (let index = 0; index < this.elementRef.nativeElement.childNodes.length - 1; index++) {
        const elemento = this.renderer.createElement(this.elementRef.nativeElement.childNodes[index].nodeName);
        this.renderer.removeChild(this.elementRef.nativeElement, elemento);
      }      
      
      const elementoResaltado = this.renderer.createElement('mark');
      const textoResaltado = this.renderer.createText(this.elementRef.nativeElement.innerText.slice(0, this.longitudTexto));
      const elementoSinResaltar = this.renderer.createElement('span');
      const textoSinResaltar = this.renderer.createText(this.elementRef.nativeElement.innerText.slice(this.longitudTexto + 1, this.elementRef.nativeElement.innerText.lenght));    
      this.renderer.appendChild(elementoResaltado, textoResaltado);
      this.renderer.appendChild(elementoSinResaltar, textoSinResaltar);
      this.renderer.appendChild(this.elementRef.nativeElement, elementoResaltado);
      this.renderer.appendChild(this.elementRef.nativeElement, elementoSinResaltar);

      // const div = this.renderer.createElement('mark');
      // const text = this.renderer.createText('Hello world!');

      // this.renderer.appendChild(div, text);
      // this.renderer.appendChild(this.elementRef.nativeElement, div);
    }
  }

}
