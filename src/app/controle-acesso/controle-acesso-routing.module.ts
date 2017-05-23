import { ControleAcessoComponent } from './controle-acesso.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'controle', component: ControleAcessoComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ControleAcessoRoutingModule {

}