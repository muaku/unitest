import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


import { WaitingMatches } from '../../providers/waiting-matches'
import { CounterProvider } from '../../providers/counter'

//declare var FacebookAds: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  waitingDatas;

  @ViewChild("newgameBtn", {read: ElementRef}) newgameBtn;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage, public fb: Facebook,
              public waitingProvider: WaitingMatches, platform: Platform,
              public renderer: Renderer, public counter: CounterProvider) {

    platform.ready().then(() => {
      // load waiting data
      this.loadWaiting()
      
    
      
    })
    
  }

  ionViewDidLoad() {
    console.log("HOME Didload")

  }

  // loading waiting data
  loadWaiting (){
    this.waitingProvider.load().subscribe(data => {
      this.waitingDatas = data.waiting
    })
  }

  // newGame button
  newGame() {
    // if no heart left, then show option
    //this.advert.showRewarded()

    // Do some effect
    this.renderer.setElementStyle(this.newgameBtn.nativeElement, "top", "3px")
    this.renderer.setElementStyle(this.newgameBtn.nativeElement, "box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0)")
    setTimeout(() => {
      this.navCtrl.push("Mode")

      // time counter
      //  var endtime = new Date()
      // console.log("Now time: ", endtime)
      // endtime.setHours(endtime.getHours() + 1)
      // console.log("endtime: ", endtime)
      // var now = new Date().toString()
      // var t = Date.parse(endtime.toString()) - Date.parse(now); 
      // console.log("t: ", t)
      // this.counter.initializeClock("timecounter", endtime)

    },300)

  }

}
