import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Title } from '@angular/platform-browser';

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
  alunosTotal:FirebaseListObservable<any>;

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

  getAlunos(){
    this.db.object('/alunos').subscribe(
      dados => {
        this.count = dados.length;
      }
    );
    this.alunos = [];
    this.alunosTotal = this.db.list('/alunos',{
      query: {
        orderByChild: 'nome'
      }
    });

    for (let i = ( this.pagina * this.porPagina ); i < (this.pagina * this.porPagina + this.porPagina); i++) {
      if (i >= this.count) {
        break;
      }
      this.alunosTotal.subscribe(
        dados => this.alunos.push(dados[i])
      );
    }
  }

}
