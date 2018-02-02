import { Directive, HostBinding, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltarTexto]'
})
export class ResaltarTextoDirective {

  @Input() longitudTexto: string = "0";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // TODO: Validate the css property to set
  @HostBinding('style.backgroundColor') highlightColor : string;

  @HostListener('keyup') enterdata(eventData: Event) {
    // TODO: Implement highlight of data
    
  }

  

}
