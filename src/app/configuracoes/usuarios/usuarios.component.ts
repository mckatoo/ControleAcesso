import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users: FirebaseListObservable<any>;
  display = 'hidden';
  editUser: object;
  acao: string;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.users = db.list('/users');
  }

  ngOnInit() {
    
  }

  modalOpen(acao:string) {
    this.acao = acao;
    this.display = '';
  }

  modalClose() {
    this.editUser = {};
    this.display = 'hidden';
  }

  save(json:string) {
    this.users.push(json);
    this.display = 'hidden';
  }
  
  editar(usuario){
    this.display = '';
    this.editUser = usuario;
  }

  update(usuario) {
    this.users.update(usuario.$key,usuario);
    this.display = 'hidden';
  }
  
  delete(key: string) {
    if (key == 'undefined') {
      this.users.remove();
    } else {
      this.users.remove(key); 
    }
  }

}
