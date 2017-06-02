import { Observable } from 'rxjs/Observable';
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
  countTotal: number;
  pagina: number = 0;
	porPagina: number;
  alunos = [];
  alunosTotal: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, private title: Title) {
    if (this.porPagina == undefined) {
      this.porPagina = 5;
    }
    this.getAlunos();
  }

  ngOnInit() {
    this.title.setTitle('IESI - Controle de Acesso');
  }

  paginar($event: any) {
		this.pagina = $event - 1;
		this.getAlunos();
	}

  temNumero(str) {
    if (str.replace(/[^0-9]/g,'') == '') {
      return false;
    } else {
      return true;
    }
  }

  search(_search:string) {
    if (_search == '') {
      this.getAlunos();
    } else {

      if (this.temNumero(_search)==true) {
        this.getAlunos({
          query: {
            orderByChild: 'matricula',
            equalTo: _search
          }
        });
        if (_search.length == 4) {
          this.getAlunos({
            query: {
              orderByChild: 'matricula',
              equalTo: '3101000'+_search
            }
          });
        }
      }

      if (this.temNumero(_search)==false) {
        this.getAlunos({
          query: {
            orderByChild: 'nome',
            startAt: _search.toUpperCase(),
            endAt: _search.toUpperCase()+'\uf8ff'
          }
        });
      }

    }
  }

  getAlunos(_query?:object){
    this.alunos = [];
    let tudo:boolean;
    if (_query == undefined) {
      tudo = true;
      _query = {
        query: {
          orderByChild: 'nome',
        }
      };
    }
    this.alunosTotal = this.db.list('/alunos',_query);
    this.alunosTotal.subscribe(
      dados => {
        this.count = dados.length;
        if (tudo == true) {
          this.countTotal = dados.length;
        }
        for (let i = ( this.pagina * this.porPagina ); i < (this.pagina * this.porPagina + this.porPagina); i++) {
          if (i >= this.count) {
            break;
          }
          if (dados[i] != undefined) {
            this.alunos.push(dados[i]);
          }
        }
      }
    );
    
  }

  liberar(aluno){
    if (confirm("Liberar acesso para " + aluno.nome + "?\nClique em OK para liberar ou CANCELAR para não liberar.")) {
      aluno.entradas = aluno.entradas + 1;
      this.alunosTotal.update(aluno.$key,aluno);
      console.log('Liberado.');
    } else {
      console.log('Não liberado.');
    }    
  }

}
