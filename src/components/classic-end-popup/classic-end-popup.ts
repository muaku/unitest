import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular'


@Component({
  selector: 'classic-end-popup',
  templateUrl: 'classic-end-popup.html'
})
export class ClassicEndPopup {

  @Input() score;

  constructor(public navCtrl: NavController) {
    
  }

  goHome() {
    console.log("go Home")
    this.navCtrl.push("Tabs")
  }
  goNewGame() {
    console.log("go new game")
    this.navCtrl.push("Mode")
  }

}
