import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fuente-contenido',
  templateUrl: './fuente-contenido.component.html',
  styleUrls: ['./fuente-contenido.component.css']
})
export class FuenteContenidoComponent {

  fuenteContenido = '';
  @Input() longitudTextoDigitado = 0; // Se requiere el texto digitado para utilizar la funcionalidad de resaltado
  @Output() textoModificado = new EventEmitter<string>();

  constructor() { }

  ajustarTextoContenido(event) {
    const lector = new FileReader();
    let archivo:File = event.target.files[0];

    lector.readAsText(archivo)
    lector.onloadend = (e) => {
      this.fuenteContenido = lector.result;
      this.textoModificado.emit(this.fuenteContenido);
    }    
  }
}
