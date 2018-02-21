import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuenteContenidoComponent } from './fuente-contenido/fuente-contenido.component';
import { DigitacionContenidoComponent } from './digitacion-contenido/digitacion-contenido.component';
import { ResultadoDigitacionComponent } from './resultado-digitacion/resultado-digitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FuenteContenidoComponent,
    DigitacionContenidoComponent,
    ResultadoDigitacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
