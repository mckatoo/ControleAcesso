import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tipo: string;
  usuario: Observable<firebase.User>;
  login;

  // constructor(private afAuth: AngularFireAuth, private db:AngularFireDatabase) {
  //   this.usuario = afAuth.authState;
  //   this.usuario.subscribe(data => {
  //     db.list("users",{
  //       query: {
  //         orderByChild: 'email',
  //         equalTo: data.email
  //       }
  //     }).subscribe(data => {
  //       this.tipo = data[0]['tipo'];
  //     });
  //   });
  // }

  constructor(private loginComponent: LoginComponent, private db: AngularFireDatabase) {
    this.usuario = loginComponent.usuario;
    this.tipo = loginComponent.tipo;
    console.log(this.tipo);
    // this.usuario.subscribe(data => {
    //   db.list("users",{
    //     query: {
    //       orderByChild: 'email',
    //       equalTo: data.email
    //     }
    //   }).subscribe(data => {
    //     this.tipo = data[0]['tipo'];
    //   });
    // });
  }

  logout() {
    // this.afAuth.auth.signOut();
    this.loginComponent.logout();
  }
}
