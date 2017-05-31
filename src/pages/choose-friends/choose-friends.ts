import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-choose-friends',
  templateUrl: 'choose-friends.html',
})
export class ChooseFriends {

  friends:any;

  // friends = [
  //               { "img": "https://graph.facebook.com/1274880022561831/picture?type=small", "name": "muaku" },
  //               { "img": "https://graph.facebook.com/1274880022561831/picture?type=small", "name": "kanlaya" }
  //           ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public fb: Facebook, public platform: Platform) {
    
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
      console.log("Error reason: ", reason)
    })

  }

  getFriendList() {
    this.fb.api("/me/friends",["user_friends"]).then((res) => {
      if(this.platform.is("android")){
        res = res.data
        // Add img property to every response
        for(var i=0; i<res.length; i++) {
          res[i].img = "https://graph.facebook.com/"+res[i].id+"/picture?type=small"
        }
        console.log("user_friends: ",res)   // got user_id, then pass user_id to picture link
        this.friends = res

      }else {
        // in ios if dont use JSON.stringify the data will not show properly
        console.log("user_friends: ",JSON.stringify(res))   // got user_id, then pass user_id to picture link
      }
    }).catch((err) => {
      console.log(err)
    })
  }

}
