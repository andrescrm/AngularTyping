import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-digitacion-contenido',
  templateUrl: './digitacion-contenido.component.html',
  styleUrls: ['./digitacion-contenido.component.css']
})
export class DigitacionContenidoComponent {

  textoDigitado = '';
  textoAnterior = '';
  cantidadAciertos = 0;
  cantidadErrores = 0;
  @Input() textoContenido = '';
  @Output() errorDigitacion = new EventEmitter<number>();
  @Output() aciertosDigitacion = new EventEmitter<number>();

  constructor() { }

  validarCaracteres(event) {
    if (this.textoContenido.charAt(this.textoDigitado.length - 1) !== event.key) {
      this.cantidadErrores++;
      this.errorDigitacion.emit(this.cantidadErrores);
      this.textoDigitado = this.textoAnterior;
    } else {
      this.cantidadAciertos++;
      this.aciertosDigitacion.emit(this.cantidadAciertos);
      this.textoAnterior = this.textoDigitado;
    }

    // TODO: Delete this line
    console.log('Aciertos ' + this.cantidadAciertos + ' Errores: ' + this.cantidadErrores);
  }
}
