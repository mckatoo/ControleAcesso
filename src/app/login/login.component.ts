import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Observable<firebase.User>;
  msgErro: string;
  tipo: string;

  constructor(
    private title: Title,
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    this.usuario = afAuth.authState;
    this.usuario.subscribe(usuario => {
      if (usuario != null) {
        this.router.navigate(['home']);
      }
    });    
  }

  login(usuario) {
    let email = usuario.email;
    let password = usuario.password;
    this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .catch(e => this.msgErro = e.message);
    this.usuario.subscribe(data => {
      this.db.list("users",{
        query: {
          orderByChild: 'email',
          equalTo: data.email
        }
      }).subscribe(data => {
        this.tipo = data[0]['tipo'];
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    this.title.setTitle('IESI - Autenticação.');
  }

}
