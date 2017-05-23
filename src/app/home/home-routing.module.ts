import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'home', component: HomeComponent },
            { path: '', component: HomeComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {

}