import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule
  ],
  declarations: [
    ConfiguracoesComponent
  ]
})
export class ConfiguracoesModule { }
