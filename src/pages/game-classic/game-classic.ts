import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Classic service
import { Classic } from "../../providers/classic"


@IonicPage()
@Component({
  selector: 'page-game-classic',
  templateUrl: 'game-classic.html',
})
export class GameClassic {

  classics: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public _classicProvider: Classic) {
    this.load()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameClassic');
  }
  

  load(){
    this._classicProvider.load().subscribe(data => {
      this.classics = data.classic
      console.log("data: ", data)
    })
  }

  navtoQuestion(){
    this.navCtrl.push("Question")
  }

}
