import { Observable } from 'rxjs/Observable';
import { AppComponent } from './../app.component';
import { firebaseAdminConfig } from './../../environments/firebase-admin.config';
import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as fbAdmin from 'firebase-admin';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  tipo: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private title: Title,
    private router: Router,
    private appComponent: AppComponent
  ) {
    // let usuario = afAuth.authState;
    // usuario.subscribe(usuario => {
    //   if (usuario == null) {
    //     router.navigate(['login']);
    //   } else {
    //     router.navigate(['configuracoes']);
    //   }
    // });
  }

  ngOnInit() {
    this.title.setTitle('IESI - Configurações');
  }

}
