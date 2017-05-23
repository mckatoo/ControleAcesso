import { SecretariaComponent } from './secretaria.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'secretaria', component: SecretariaComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SecretariaRoutingModule {

}