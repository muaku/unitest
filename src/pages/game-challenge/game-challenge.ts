import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WaitingMatches } from '../../providers/waiting-matches'


@IonicPage()
@Component({
  selector: 'page-game-challenge',
  templateUrl: 'game-challenge.html',
})
export class GameChallenge {
  waitingDatas;
  choosefriends;

  constructor(public navCtrl: NavController, public navParams: NavParams,public waitingProvider: WaitingMatches) {
    this.loadWaiting()
    this.choosefriends = "ChooseFriends"

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameChallenge');
  }

   loadWaiting (){
    this.waitingProvider.load().subscribe(data => {
      this.waitingDatas = data.waiting
    })
  }

}
