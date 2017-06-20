import { Observable } from 'rxjs/Observable';
import { AppComponent } from './../../app.component';
import { Component, OnInit, EventEmitter } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {MaterializeAction} from 'angular2-materialize';
import * as firebase from 'firebase';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users: FirebaseListObservable<any>;
  tipos: FirebaseListObservable<any>;
  display = 'hidden';
  editUser: object;
  acao: string;
  valida: string;
  tipo;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private appComponent: AppComponent,
  ) {
    this.users = db.list('/users');
    this.tipos = db.list('/tipos');
    this.tipo = appComponent.tipo;
    console.log(this.tipo);
  }

  ngOnInit() {
  }

  validaSenha(senha1:string, senha2:string) {
    if (senha1 != senha2) {
      return "As senhas não conferem!";
    }
  }

  validaEmail(email:string) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (email == "") {
      return null;
    }
    if (!EMAIL_REGEXP.test(email)) {
        return "E-Mail inválido!";
    }
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  save(json) {
    this.users.push(json);
    this.afAuth.auth.createUserWithEmailAndPassword(json.email,json.senha);
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

  delete(usuario) {
    if (usuario.$key == 'undefined') {
      if (confirm("Deseja excluir todos usuários?")) {
        this.users.remove();
      }
    } else {
      if (confirm("Deseja excluir o usuáio "+usuario.nome+"?")) {
        this.users.remove(usuario.$key);
      }
    }
  }

}
