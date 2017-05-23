import { PerfilComponent } from './perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'perfil', component: PerfilComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PerfilRoutingModule {

}