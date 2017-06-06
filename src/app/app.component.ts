import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuario: Observable<firebase.User>;
  login;

  constructor(private afAuth: AngularFireAuth) {
    this.usuario = afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
