import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

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
        router.navigate(['relatorios']);
      }
    });}

  ngOnInit() {
    this.title.setTitle('IESI - Relatórios');
  }

}
