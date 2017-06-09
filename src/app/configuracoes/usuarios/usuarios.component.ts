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

  users: any;
  display: string;
  editUser: object;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    db.list('/users').subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
    
  }

  save(json:string) {
    this.users.push(json);
  }
  
  editar(usuario){
    this.display = '';
    this.editUser = usuario;
  }

  update(aluno) {
    this.users.update(aluno.$key,aluno);
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
