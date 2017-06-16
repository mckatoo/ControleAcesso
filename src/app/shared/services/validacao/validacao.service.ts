import { Injectable } from '@angular/core';

@Injectable()
export class ValidacaoService {

  constructor() { }

  senha(senha1:string, senha2:string) {
    if (senha1 != senha2) {
      return "As senhas não conferem!";
    }
  }

  // email(email:string) {
  //   let exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  //   let check=/@[w-]+./;
  //   let checkend=/.[a-zA-Z]{2,3}$/;
  //
  //   if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

}
