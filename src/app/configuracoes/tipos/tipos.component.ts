import { Component, OnInit, EventEmitter } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import {MaterializeAction} from 'angular2-materialize';

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

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
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
