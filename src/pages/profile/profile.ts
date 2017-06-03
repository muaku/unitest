import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public fb: Facebook) {
    this.data = { "img": "https://graph.facebook.com/1274880022561831/picture?type=small", "name": "muaku" } 
      
}

  ionViewDidLoad() {
  }

 

  // logout
  logout() {
    this.fb.logout().then(() => {
      this.storage.remove("user").then(() => {
        this.navCtrl.push("Login")
      }, function(err){
        console.log(err)
      })
    })
  }

  //gotoProfile
  gotoProfile(){
    console.log("Do nothing")
  }
  // gotoHome
  gotoHome(){
    this.navCtrl.push("Home")
  }

}
