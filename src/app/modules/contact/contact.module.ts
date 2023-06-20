import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderContactoComponent } from './components/header-contacto/header-contacto.component';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    FormularioComponent,
    HeaderContactoComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
