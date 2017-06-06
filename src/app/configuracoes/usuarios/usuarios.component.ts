import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  users:any;

  constructor(
    private db: AngularFireDatabase
  ) {
    // db.list('/users').subscribe(users => {
    //   this.users = users;
    //   console.log(this.users);
    // });
  }

  ngOnInit() {
    
  }

}
