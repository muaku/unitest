import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// question service
import { Classic } from "../../providers/classic"

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class Question {

  datas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _classicProvider: Classic) {
    this.getQuestion()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Question');
    
  }

  getQuestion(){
    this._classicProvider.getQuestion().subscribe(data => {
      this.datas = data.data[0]
      console.log("datas: ", this.datas)
    })
  }

}
