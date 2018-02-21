import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fuente-contenido',
  templateUrl: './fuente-contenido.component.html',
  styleUrls: ['./fuente-contenido.component.css']
})
export class FuenteContenidoComponent implements OnChanges {

  fuenteContenido = '';
  contenidoSinResaltar = '';
  contenidoResaltado = '';
  errorArchivo = '';
  @Input() longitudTextoDigitado = 0; // Se requiere el texto digitado para utilizar la funcionalidad de resaltado
  @Output() textoModificado = new EventEmitter<string>();

  constructor() { }

  ajustarTextoContenido(event) {
    const lector = new FileReader();
    const archivo: File = event.target.files[0];

    if (archivo.name.split('.')[1] === 'txt') {
      lector.readAsText(archivo);
      lector.onloadend = (e) => {
        this.fuenteContenido = lector.result;
        this.contenidoSinResaltar = this.fuenteContenido;
        this.textoModificado.emit(this.fuenteContenido);
        this.errorArchivo = '';
      };
    } else {
      this.errorArchivo = 'El tipo de archivo seleccionado no es valido!';
    }
  }

  ngOnChanges(cambios: SimpleChanges) {
    if (cambios.longitudTextoDigitado) {
      this.contenidoResaltado = this.fuenteContenido.slice(0, this.longitudTextoDigitado);
      this.contenidoSinResaltar = this.fuenteContenido.slice(this.longitudTextoDigitado, this.fuenteContenido.length);
    }
  }
}
