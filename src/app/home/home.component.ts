import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  usuario: Observable<firebase.User>;

  constructor(
    private title: Title,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.usuario = afAuth.authState;
    this.usuario.subscribe(usuario => {
      if (usuario == null) {
        router.navigate(['login']);
      } else {
        router.navigate(['home']);
      }
    });
  }

  ngOnInit() {
    this.title.setTitle('IESI - Bem vindo.');
  }

}
