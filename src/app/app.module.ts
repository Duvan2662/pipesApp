import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";


import { AppComponent } from './app.component';


//configuracion del locale de la app
import localeEsCol from "@angular/common/locales/es-CO";
import localeEsFrCa from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsCol);
registerLocaleData(localeEsFrCa);





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
],
  providers: [
    {
      provide: LOCALE_ID, useValue :'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
