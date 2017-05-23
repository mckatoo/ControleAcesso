import { ControleAcessoComponent } from './controle-acesso.component';
import { ControleAcessoRoutingModule } from './controle-acesso-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ControleAcessoRoutingModule
  ],
  declarations: [
    ControleAcessoComponent
  ],
  exports: [
    ControleAcessoComponent
  ]
})
export class ControleAcessoModule { }
