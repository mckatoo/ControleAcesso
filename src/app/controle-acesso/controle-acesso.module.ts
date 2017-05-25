import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControleAcessoComponent } from './controle-acesso.component';
import { ControleAcessoRoutingModule } from './controle-acesso-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ControleAcessoRoutingModule,
    SharedModule,
  ],
  declarations: [
    ControleAcessoComponent
  ],
  exports: [
    ControleAcessoComponent
  ]
})
export class ControleAcessoModule { }
