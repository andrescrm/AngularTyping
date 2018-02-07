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
  @Output() erroresDigitacion = new EventEmitter<number>();
  @Output() aciertosDigitacion = new EventEmitter<number>();

  constructor() { }

  validarCaracteres(event) {    
    if (this.textoContenido.slice(0, this.textoDigitado.length) === this.textoDigitado) {                    
      this.cantidadAciertos = this.textoDigitado.length;
      this.aciertosDigitacion.emit(this.cantidadAciertos);
      this.textoAnterior = this.textoDigitado;
    } else {
      this.cantidadErrores = this.cantidadErrores + (this.textoDigitado.length - this.textoAnterior.length);
      this.erroresDigitacion.emit(this.cantidadErrores);
      this.textoDigitado = this.textoAnterior;
    }

    // TODO: Delete this line
    console.log('Aciertos ' + this.cantidadAciertos + ' Errores: ' + this.cantidadErrores);
  }
}
