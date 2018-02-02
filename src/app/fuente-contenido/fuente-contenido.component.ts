import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-fuente-contenido',
  templateUrl: './fuente-contenido.component.html',
  styleUrls: ['./fuente-contenido.component.css']
})
export class FuenteContenidoComponent implements OnInit {

  fuenteContenido: string = "";
  @Input() longitudTextoDigitado: number = 0; // Se requiere el texto digitado para utilizar la funcionalidad de resaltado  

  constructor() { }

  ngOnInit() {
  }

  ajustarTextoContenido(event) {
    this.fuenteContenido = event.target.value;
  }

}
