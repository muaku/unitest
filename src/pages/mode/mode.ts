import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

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
  gamechallenge:any;
  @ViewChild(Navbar) navBar: Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gameclassic = "GameClassic"
    this.gamechallenge = "GameChallenge"
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.push("Tabs")
    }

  }

  

 

}
