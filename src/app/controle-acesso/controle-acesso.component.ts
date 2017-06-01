import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.scss']
})
export class ControleAcessoComponent implements OnInit {

  editAluno: FirebaseListObservable<any>;
  display = 'hidden';
  count: number;
  pagina: number = 0;
	porPagina: number;
  alunos = [];
  // alunosTotal:FirebaseListObservable<any>;
  alunosTotal;
  _query: object = {
    query: {
      orderByChild: 'nome',
    }
  };

  constructor(private db: AngularFireDatabase, private title: Title) {
    if (this.porPagina == undefined) {
      this.porPagina = 5;
    }
    // this.getAlunos();
    // const rootRef = firebase.database().ref();
    // this.alunosTotal = rootRef.child('alunos').orderByChild('nome').startAt('ADAUTO').endAt('ADAUTO'+'\uf8ff');
    // this.alunosTotal.on('value', snap => console.log(snap.val()));
    this.db.list('/alunos',{
      query: {
        orderByChild: 'nome',
        startAt: 'ADAUTO',
        endAt: 'ADAUTO\uf8ff'
      }
    }).subscribe(dados => {
      this.alunos = [];
      for (let i in this.alunosTotal) {
        if (this.alunosTotal.hasOwnProperty(i)) {
          this.alunos.push(this.alunosTotal[i]);
        }
      }

    });
    console.log(this.alunosTotal);
  }

  ngOnInit() {
    this.title.setTitle('IESI - Controle de Acesso');
  }

  // paginar($event: any) {
	// 	this.pagina = $event - 1;
	// 	this.getAlunos();
	// }

  // search(_search:string) {
  //   function isNumber(n) {
  //     return !isNaN(parseFloat(n)) && isFinite(n);
  //   }
  //   this.alunos = [];
  //   if (_search == '') {
  //     this._query = {
  //       query: {
  //         orderByChild: 'nome',
  //       }
  //     };
  //   } else if (isNumber(_search)) {
  //     this._query = {
  //       query: {
  //         orderByChild: 'matricula',
  //         equalTo: _search
  //       }
  //     };
  //     console.log('é número');
  //   } else {
  //     console.log('não é número');
  //   }
  //   this.getAlunos();
  // }

  // alunosArray() {
  //   this.alunos = [];
  //   for (let i = ( this.pagina * this.porPagina ); i < (this.pagina * this.porPagina + this.porPagina); i++) {
  //     if (i >= this.count) {
  //       break;
  //     }
  //     this.alunosTotal.subscribe(
  //       dados => {
  //         if (dados[i] != undefined) {
  //           this.alunos.push(dados[i]);
  //         }
  //       }
  //     );
  //   }
  // }

  // getAlunos(){
  //   this.alunosTotal = this.db.list('/alunos',this._query);
  //   this.alunosTotal.subscribe(
  //     dados => {
  //       this.count = dados.length;
  //     }
  //   );
  //   this.alunosArray();
  // }

}
