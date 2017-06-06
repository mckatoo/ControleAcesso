import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './../login/login.module';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
  ],
  declarations: [
    ConfiguracoesComponent,
    UsuariosComponent
  ]
})
export class ConfiguracoesModule { }
