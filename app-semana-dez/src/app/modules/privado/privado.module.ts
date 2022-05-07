import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { SerieComponent } from './serie/serie.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    SerieComponent,
    TelaInicialComponent,
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
