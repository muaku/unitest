import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WaitingMatches {

  constructor(public http: Http) {
    console.log('Hello WaitingMatches Provider');
  }

  load(){
    return this.http.get("../assets/data/waiting-data.json").map(res => res.json())
  }

}
