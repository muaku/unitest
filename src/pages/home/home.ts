import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AdMob,AdMobOptions } from '@ionic-native/admob';

import { WaitingMatches } from '../../providers/waiting-matches'
// import { Advert } from '../../providers/advert'

//declare var FacebookAds: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  waitingDatas;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage, public fb: Facebook,
              public waitingProvider: WaitingMatches, platform: Platform,
              public admob: AdMob) {

    platform.ready().then(() => {
      // load waiting data
      this.loadWaiting()
      
    
      
    })
    
  }

  ionViewDidLoad() {
    console.log("HOME Didload")
    // Register ads events
     this.registerAdsEvents() 
  }

  // // Show banner Ads, show tabbar
  // ionViewWillEnter(){
  //   console.log("HOME WILL ENTER")
  //   this.advert.showBanner()
  // }
  // // Hide banner Ads, hide tabbar
  // ionViewWillLeave(){
  //   console.log("HOME WILL LEAVE")
  //   this.advert.hideBanner()
  // }

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
    this.navCtrl.push("Mode")

  }

  // register ads events
  registerAdsEvents(){
    // on AdLoaded
    this.admob.onAdLoaded().subscribe((data) => {
      console.log("admob onAdLoaded: ",data)
    })
    // on AdDismiss
    this.admob.onAdDismiss()
    .subscribe(() => { console.log('User dismissed ad'); });
    // on AdPresent, triggered when ads finished showing
    this.admob.onAdPresent().subscribe((data) => {
      console.log("on AdPresent and adType is ", data.adType)
      if(data.adType === "rewardvideo"){
        // increase heart number
        console.log("you got "+data.rewardAmount+" "+data.rewardType)
      }
    })

  }

  // // facebook native ads
  // fbNativeAds(){

  //   if(FacebookAds) {
  //     console.log("FacebookAds is there .... ")
  //     //  FacebookAds.setOptions({
  //     //     isTesting: true,
  //     //     deviceHash: 'LQjjK9NF0P9MXHGamZr4CaZsDgQ='
  //     //   });
  //     FacebookAds.createNativeAd("1487848894642151_1500835616676812",function(data){
  //       console.log("Success: ... ",data)
  //     })
  //   }
  //   //
  //   document.addEventListener("onAdLoaded", function(data){
  //     let temp: any = data;
  //     console.log("fbNativeAds: ",data)
  //     if(temp.adType === "native"){
        
  //     }
  //   })

  // }

 




}
