import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaComponent } from './secretaria.component';
import { SecretariaRoutingModule } from './secretaria-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SecretariaRoutingModule,
    BrowserModule,
	  FormsModule,
    SharedModule,
  ],
  declarations: [
    SecretariaComponent,
  ]
})
export class SecretariaModule {}
