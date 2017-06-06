import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as fbAdmin from 'firebase-admin';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    
  }

}
