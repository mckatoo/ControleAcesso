import { ConfiguracoesComponent } from './configuracoes.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'configuracoes', component: ConfiguracoesComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ConfiguracoesRoutingModule {

}