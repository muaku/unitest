import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Classic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Classic {

  constructor(public http: Http) {
  }

  load() {
    return this.http.get("../assets/data/classic-score.json").map(res => res.json())
  }

  // get question
  getQuestion() {
    return this.http.get("../assets/data/question-data.json").map(res => {
      var resInJson = res.json()
      for(var i=0; i<resInJson.data.length; i++){
         var originalAnswerOrder = resInJson.data[i].answers
         resInJson.data[i].answers = this.randomizeAnswer(originalAnswerOrder)
      }
     
      console.log("originalData: ", resInJson)
      return resInJson
    })
  }

   // random Answer
  private randomizeAnswer(answers: any[]): any[] {
    for(var i=0; i<answers.length; i++) {
      let j = Math.floor(Math.random() * (i+1))
      let temp = answers[i]
      answers[i] = answers[j]
      answers[j] = temp
    }
    return answers;
  }

}
