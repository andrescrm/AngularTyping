import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FuenteContenidoComponent } from './fuente-contenido/fuente-contenido.component';
import { DigitacionContenidoComponent } from './digitacion-contenido/digitacion-contenido.component';
import { ResultadoDigitacionComponent } from './resultado-digitacion/resultado-digitacion.component';
import { ResaltarTextoDirective } from './resaltar-texto.directive';


@NgModule({
  declarations: [
    AppComponent,
    FuenteContenidoComponent,
    DigitacionContenidoComponent,
    ResultadoDigitacionComponent,
    ResaltarTextoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
