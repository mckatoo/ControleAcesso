import { RelatoriosComponent } from './relatorios.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'relatorios', component: RelatoriosComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RelatoriosRoutingModule {

}