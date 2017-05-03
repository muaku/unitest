import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
//import _ from 'lodash';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {

  constructor(public storage: Storage) {
    console.log('Hello Auth Provider');
  }

  login():any{
    this.storage.ready().then(() => {
      this.storage.get('isLoggedIn').then((val) => {
        // if Logged in
        if(val === true){
          return new Promise((resolve, reject) => {
            resolve(true);
          })
        }else{
          return new Promise((resolve, reject) => {
            resolve(false);
          })
        }

      })
    })
  }

}
