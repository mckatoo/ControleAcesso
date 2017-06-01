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
    this.db.list('/alunos',{
        query: {
          orderByChild: 'nome',
          startAt: 'adauto',
          endAt: 'adauto\uf8ff'
        }
      }).subscribe(dados => {
        this.count = dados.length;
        this.alunos = [];
        for (var i in dados) {
          if (dados.hasOwnProperty(i)) {
            this.alunos.push(dados[i]);
          }
        }
        console.log(dados);
      });
  }

  ngOnInit() {
    this.title.setTitle('IESI - Controle de Acesso');
  }

  paginar($event: any) {
		this.pagina = $event - 1;
		this.getAlunos();
	}

  search(_search:string) {
    // function isNumber(n) {
    //   return !isNaN(parseFloat(n)) && isFinite(n);
    // }
    // this.alunos = [];
    // if (_search == '') {
    //   this._query = {
    //     query: {
    //       orderByChild: 'nome',
    //     }
    //   };
    //   this.getAlunos();
    // } else if (isNumber(_search)) {
    //   this._query = {
    //     query: {
    //       orderByChild: 'matricula',
    //       equalTo: _search
    //     }
    //   };
    //   this.getAlunos();
    //   console.log('é número');
    // } else {
    //   this.db.list('/alunos',{
    //     query: {
    //       orderByChild: 'nome',
    //       startAt: _search,
    //       endAt: _search + "\uf8ff"
    //     }
    //   }).subscribe(dados => {
    //     this.count = dados.length;
    //     for (var i in dados) {
    //       if (dados.hasOwnProperty(i)) {
    //         this.alunos.push(dados[i]);
    //       }
    //     }
    //     console.log(_search + "\uf8ff");
    //   });
    //   console.log('não é número');
    // }
    this.db.list('/alunos',{
        query: {
          orderByChild: 'nome',
          startAt: _search,
          endAt: _search + "\uf8ff"
        }
      }).subscribe(dados => {
        this.count = dados.length;
        this.alunos = [];
        for (var i in dados) {
          if (dados.hasOwnProperty(i)) {
            this.alunos.push(dados[i]);
          }
        }
        console.log(dados);
      });
  }

  alunosArray() {
    this.alunos = [];
    for (let i = ( this.pagina * this.porPagina ); i < (this.pagina * this.porPagina + this.porPagina); i++) {
      if (i >= this.count) {
        break;
      }
      this.alunosTotal.subscribe(
        dados => {
          if (dados[i] != undefined) {
            this.alunos.push(dados[i]);
          }
        }
      );
    }
  }

  getAlunos(){
    this.alunosTotal = this.db.list('/alunos',this._query);
    this.alunosTotal.subscribe(
      dados => {
        this.count = dados.length;
      }
    );
    this.alunosArray();
  }

}
