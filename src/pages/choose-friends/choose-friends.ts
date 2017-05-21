import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';


@IonicPage()
@Component({
  selector: 'page-choose-friends',
  templateUrl: 'choose-friends.html',
})
export class ChooseFriends {


  friends = [
                { "img": "https://graph.facebook.com/1274880022561831/picture?type=small", "name": "muaku" },
                { "img": "https://graph.facebook.com/1274880022561831/picture?type=small", "name": "kanlaya" }
            ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseFriends');
  }

  // Fb invite friends
  fbInvite() {
    var fbOptions = {
      url: "https://fb.me/1517069371720103",
      picture: "https://graph.facebook.com/1274880022561831/picture?type=small"
    }
    this.fb.appInvite(fbOptions).then((result) => {
      result = JSON.stringify(result)
      console.log(result)
      //console.log(result["didComplete"])
      console.log("Reward user with 3coins")

    }).catch((reason) => {
      console.log("Error reason: ", JSON.stringify(reason))
    })

  }

}
