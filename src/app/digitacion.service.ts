import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/map';

export interface Tiempo {
  horas: number;
  minutos: number;
  segundos: number;
}

@Injectable()
export class DigitacionService {

  constructor() { }

  private tiempoDigitacionSegundos = 0;
  private cantidadAciertos = 0;
  private cantidadErrores = 0;
  private cantidadCaracteres = 0;
  private sumaCaracteres: Map<string, number> = new Map<string, number>();
  digitacionIniciada = new Subject<boolean>();
  caracterAcertado = new Subject<string>();
  caracterErrado = new Subject<string>();
  caracteresPorMinuto = new Subject<number>();
  aciertos = new Subject<number>();
  errores = new Subject<number>();

  get Aciertos() {
    return this.cantidadAciertos;
  }

  set Aciertos(value) {
    this.cantidadAciertos = value;
    this.aciertos.next(this.cantidadAciertos);
  }

  get Errores() {
    return this.cantidadErrores;
  }

  set Errores(value) {
    this.cantidadErrores = value;
    this.errores.next(this.cantidadErrores);
  }

  get Caracteres() {
    return this.cantidadCaracteres;
  }

  set Caracteres(value) {
    this.cantidadCaracteres = value;
  }

  private calcularTiempo(tiempoInicio: Date): Tiempo {
    const ahora = new Date().getTime();
    const diferencia = ahora - tiempoInicio.getTime();

    const resultado: Tiempo = {horas: 0, minutos: 0, segundos: 0};
    resultado.horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    resultado.minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    resultado.segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    this.tiempoDigitacionSegundos++;
    return resultado;
  }

  temporizador(tiempo: Date): Observable<Tiempo> {
    return Observable.interval(1000).map(() => this.calcularTiempo(tiempo));
  }

  calcularCaracteresPorMinuto() {
    if (!this.tiempoDigitacionSegundos) {
      return 0;
    }
    return this.cantidadAciertos / (this.tiempoDigitacionSegundos / 60);
  }

  insertarSumaCaracteres(caracter: string) {
    this.sumaCaracteres.set(caracter.toLowerCase(),
      this.sumaCaracteres.get(caracter.toLowerCase()) ? this.sumaCaracteres.get(caracter.toLowerCase()) + 1 : 1);
  }
}
