import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './modules/contacto/formulario/formulario/formulario.component';
import { HeaderContactoComponent } from './modules/contacto/header-contacto/header-contacto.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { HeaderComponent } from './modules/contacto/header/header.component';
import { ValidateControlComponent } from './components/validate-control/validate-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HeaderContactoComponent,
    ContactoComponent,
    HeaderComponent,
    ValidateControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
