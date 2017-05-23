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

  constructor(private afAuth: AngularFireAuth) {
    this.usuario = afAuth.authState;
  }

  login(email:string, passwd:string) {
    email = 'mckatoo@gmail.com';
    passwd = 'mckatoo';
    this.afAuth.auth.signInWithEmailAndPassword(email,passwd);
    // this._location.reload;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
