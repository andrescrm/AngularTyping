import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fuenteContenido = '';
  cantidadAciertos = 0;

  onAciertosDigitacion(eventData) {
    this.cantidadAciertos = eventData;
  }

  onTextoModificado(eventData) {
    this.fuenteContenido = eventData;
  }

}
