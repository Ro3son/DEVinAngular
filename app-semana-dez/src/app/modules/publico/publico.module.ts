import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';


@NgModule({
  declarations: [
    EsqueciSenhaComponent
  ],
  imports: [
    CommonModule,
    PublicoRoutingModule
  ]
})
export class PublicoModule { }
