import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DigitacionService, Tiempo } from '../digitacion.service';
import { Observable } from 'rxjs/Observable';

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
  cantidadCaracteres = 0;

  @Input() textoContenido = '';
  @Output() erroresDigitacion = new EventEmitter<number>();
  @Output() aciertosDigitacion = new EventEmitter<number>();

  constructor(private servicioDigitacion: DigitacionService) { }

  validarCaracteres(event) {
    this.cantidadCaracteres++;

    if (this.cantidadCaracteres === 1) {
      this.servicioDigitacion.digitacionIniciada.next(true);
    }

    if (this.textoContenido.slice(0, this.textoDigitado.length) === this.textoDigitado) {
      this.cantidadAciertos = this.textoDigitado.length;
      this.aciertosDigitacion.emit(this.cantidadAciertos);
      this.servicioDigitacion.Aciertos = this.cantidadAciertos;
      this.servicioDigitacion.Caracteres = this.cantidadCaracteres;
      this.textoAnterior = this.textoDigitado;
      this.servicioDigitacion.caracterAcertado.next(event.key);
    } else {
      this.cantidadErrores = this.cantidadErrores + (this.textoDigitado.length - this.textoAnterior.length);
      this.erroresDigitacion.emit(this.cantidadErrores);
      this.servicioDigitacion.Errores = this.cantidadErrores;
      this.textoDigitado = this.textoAnterior;
      this.servicioDigitacion.caracterErrado.next(event.key);
    }

    // TODO: Delete this line
    console.log('Aciertos ' + this.cantidadAciertos + ' Errores: ' + this.cantidadErrores);
  }
}
