import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit {

  tipos: FirebaseListObservable<any>;
  display = 'hidden';
  editTipo: object;
  acao: string;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.tipos = db.list('/tipos');
  }

  ngOnInit() {
    
  }

  modalOpen(acao:string) {
    this.acao = acao;
    this.display = '';
  }

  modalClose() {
    this.editTipo = {};
    this.display = 'hidden';
  }

  save(json:string) {
    this.tipos.push(json);
    this.display = 'hidden';
  }
  
  editar(tipo){
    this.display = '';
    this.editTipo = tipo;
  }

  update(tipo) {
    this.tipos.update(tipo.$key,tipo);
    this.display = 'hidden';
  }
  
  delete(key: string) {
    if (key == 'undefined') {
      this.tipos.remove();
    } else {
      this.tipos.remove(key); 
    }
  }

}
