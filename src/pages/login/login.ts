import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

// login using facebook
  login_facebook() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
      let fb_id = res.authResponse.userID

      // rquest for user info
      this.fb.api("/me?fields=name,gender,email",[]).then((user) => {
        user.picture = "https://graph.facebook.com/" + fb_id + "/picture?type=small";
        console.log("user: ", user)

        // request for user friends
        this.fb.api("/me/friends?fields=uid",[]).then((friendsData) => {
          console.log("friends: ", friendsData)

          // get friends
          user.friends = friendsData.friends

          var object = {
            name: user.name,
            email: user.email,
            picture: user.picture,
            friends: user.friends,
            isLoggedIn: true
          }
          // make a POST object to server, to save new user
          // CODE goes here ...

          // store user data in storage
          this.storage.set("user", object).then(() => {
            this.navCtrl.push("Home")
          }), function(err){
            console.log(err)
          }
        })
        
        
      })
    })
    .catch(e => console.log("Error logging into facebook", e))
  }


}
