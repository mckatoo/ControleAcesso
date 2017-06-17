import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';

import { LoginModule } from './login/login.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { ControleAcessoModule } from './controle-acesso/controle-acesso.module';
import { HomeModule } from './home/home.module';
import { PerfilModule } from './perfil/perfil.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { SecretariaModule } from './secretaria/secretaria.module';
import { ValidacaoService } from './shared/services/validacao/validacao.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    ConfiguracoesModule,
    ControleAcessoModule,
    HomeModule,
    PerfilModule,
    RelatoriosModule,
    SecretariaModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
