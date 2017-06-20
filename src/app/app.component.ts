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
  tipo: Observable<string>;
  nome: Observable<string>;

  constructor(
    private loginComponent: LoginComponent,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
      if (afAuth.authState != null) {
        afAuth.authState.subscribe(dados => {
          if (dados != null) {
            db.list('/users',{
              query: {
                orderByChild: 'email',
                equalTo: dados.email
              }
            }).subscribe(usuario => {
              this.nome = usuario[0]['nome'];
              this.tipo = usuario[0]['tipo'];
            });
          }
        });
      }
  }

  ngOnInit() {
  }

  logout() {
    this.loginComponent.logout();
  }
}
