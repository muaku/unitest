import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { WaitingMatches } from '../../providers/waiting-matches'
//import { Mode } from '../mode/mode'

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  modePage

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public fb: Facebook, public waitingProvider: WaitingMatches) {
    this.modePage="Mode"
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
    this.waitingProvider.load()
    console.log(this.waitingProvider.waiting)
  }


  logout() {
    this.fb.logout().then(() => {
      this.storage.remove("user").then(() => {
        this.navCtrl.push("Login")
      }, function(err){
        console.log(err)
      })
    })
  }

}
