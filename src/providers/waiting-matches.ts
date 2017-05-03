import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WaitingMatches provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WaitingMatches {

  waiting:any = []

  constructor() {
    console.log('Hello WaitingMatches Provider');
  }

  load(){
    this.waiting = [
      {
        playerIdAndScore:[
          { img: "https://graph.facebook.com/1274880022561831/picture?type=small", score: 8},
          { img: "https://graph.facebook.com/1274880022561831/picture?type=small", score: 3}
        ]
      },
      {
        playerIdAndScore:[
          { img: "https://graph.facebook.com/1274880022561831/picture?type=small", score: 8},
          { img: "https://graph.facebook.com/1274880022561831/picture?type=small", score: 3}
        ]
      },
      {
        playerIdAndScore:[
          { img: "https://graph.facebook.com/1274880022561831/picture?type=small", score: 8},
          { img: "https://graph.facebook.com/1274880022561831/picture?type=small", score: 3}
        ]
      }
    ]
  }

}
