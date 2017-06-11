import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './../login/login.module';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TiposComponent } from './tipos/tipos.component';
import { MaterializeModule } from "angular2-materialize";

@NgModule({
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  declarations: [
    ConfiguracoesComponent,
    UsuariosComponent,
    TiposComponent
  ]
})
export class ConfiguracoesModule { }
