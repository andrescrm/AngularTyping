import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fuenteContenido = '';
  cantidadAciertos = 0;

  // Se dispara cuando se digitan caracteres acertados
  onAciertosDigitacion(eventData) {
    this.cantidadAciertos = eventData;
  }

  // Se dispara cuando se carga un nuevo archivo
  onTextoModificado(eventData) {
    this.fuenteContenido = eventData;
  }

}
