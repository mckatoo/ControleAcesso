import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';

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
  alunos;
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
  }

  ngOnInit() {
    this.title.setTitle('IESI - Controle de Acesso');
    this.db.list('/alunos',{
      query: {
      orderByChild: 'nome',
      }
    }).subscribe(
      dados => this.alunosTotal = this.alunos = dados
    );
  }

  paginar($event: any) {
		this.pagina = $event - 1;
		this.getAlunos();
	}

  // search(_search:string) {
  //   this.alunos = [];
  //   if (_search == '') {
  //     this._query = {
  //       query: {
  //         orderByChild: 'nome',
  //       }
  //     };
  //   } else {
  //     this._query = {
  //       query: {
  //         orderByChild: 'matricula',
  //         equalTo: _search,
  //       }
  //     };
  //   }
  //   this.getAlunos();
  // }

  search(_search:string) {
    let _query = this._query;
    if (_search != '') {
      _query = {
        query: {
          orderByChild: 'matricula',
          equalTo: _search
        }
      }
    }
    this.db.list('/alunos',_query).subscribe(
      dados => {
        this.alunos = dados;
        this.count = dados.length;
      }
    );
    if (this.count == 0) {
      this.db.list('/alunos', {
        query: {
          orderByChild: 'matricula',
          equalTo: '3101000'+_search
        }
      }).subscribe(
        dados => {
          this.alunos = dados;
          this.count = dados.length;
        }
      );
    }
  }

  alunosArray() {
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
    this.alunos = [];
    this.alunosTotal = this.db.list('/alunos',this._query);
    this.alunosTotal.subscribe(
      dados => {
        this.count = dados.length;
      }
    );
    this.alunosArray();
  }

}
