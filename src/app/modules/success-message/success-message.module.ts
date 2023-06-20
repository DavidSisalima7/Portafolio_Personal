import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessMessageRoutingModule } from './success-message-routing.module';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    SuccessMessageRoutingModule
  ]
})
export class SuccessMessageModule { }
