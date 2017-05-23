import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginacaoComponent } from './componentes/paginacao/paginacao.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginacaoComponent],
  exports: [PaginacaoComponent]
})
export class SharedModule { }
