import { RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  email: Observable<firebase.User>;

  constructor(
    private title: Title,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    afAuth.authState.subscribe(
      usuario => {
        // this.email = usuario.emailVerified.valueOf;
      }
    )

    // if () {
      
    // }
    
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.title.setTitle('IESI - Bem vindo.');
  }

}
