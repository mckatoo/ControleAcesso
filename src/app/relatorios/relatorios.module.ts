import { RelatoriosComponent } from './relatorios.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RelatoriosRoutingModule
  ],
  declarations: [
    RelatoriosComponent
  ]
})
export class RelatoriosModule { }
