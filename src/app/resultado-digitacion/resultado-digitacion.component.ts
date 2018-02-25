import { Component, OnInit } from '@angular/core';
import { DigitacionService, Tiempo } from '../digitacion.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-resultado-digitacion',
  templateUrl: './resultado-digitacion.component.html',
  styleUrls: ['./resultado-digitacion.component.css']
})
export class ResultadoDigitacionComponent implements OnInit {

  cronometro: Tiempo;
  iniciarCronometro: boolean;
  aciertos = 0;
  errores = 0;

  constructor(private servicio: DigitacionService) { }

  ngOnInit() {
    this.servicio.digitacionIniciada.subscribe(
      (iniciar) => {
        this.iniciarCronometro = iniciar;
        this.servicio.temporizador(new Date()).subscribe(tiempo => this.cronometro = tiempo);
      }
    );

    this.servicio.aciertos.subscribe(
      (aciertos) => this.aciertos = aciertos
    );

    this.servicio.errores.subscribe(
      (errores) => this.errores = errores
    );
  }
}
