import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseFriends');
  }

}
