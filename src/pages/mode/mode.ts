import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Mode page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mode',
  templateUrl: 'mode.html',
})
export class Mode {
  gameclassic:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gameclassic = "GameClassic"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mode');
  }

}
