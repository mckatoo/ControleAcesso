import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private title: Title,
    private router: Router,
  ) {
    let usuario = afAuth.authState;
    usuario.subscribe(usuario => {
      if (usuario == null) {
        router.navigate(['login']);
      } else {
        router.navigate(['perfil']);
      }
    });}

  ngOnInit() {
    this.title.setTitle('IESI - Perfil');
  }

}
