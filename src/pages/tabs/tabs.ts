import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Advert } from '../../providers/advert'

declare var FacebookAds: any;

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  
  homeDisplay;
  profileDisplay:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public advert: Advert) {
    this.profileDisplay = "none"
  }

  ionViewDidLoad() {
    console.log("Tabs Did load")
    this.fbNativeAds()
  }

  // Show banner Ads, show tabbar
  ionViewWillEnter(){
    console.log("Tabs WILL ENTER")
    this.advert.showBanner()
  }
  // Hide banner Ads, hide tabbar
  ionViewWillLeave(){
    console.log("Tabs WILL LEAVE")
    this.advert.hideBanner()
  }

  // for fake tabbar
  openTab(tabName){
    switch(tabName){
      case "home":
        this.homeDisplay = ""
        this.profileDisplay = "none"
        break
      case "profile":
        this.homeDisplay = "none"
        this.profileDisplay = ""
        break
      default:
        console.log("DO nothing")
    }
  }

    // facebook native ads
  fbNativeAds(){

    if(FacebookAds) {
      console.log("FacebookAds is there .... ")
       FacebookAds.setOptions({
          isTesting: true,
          deviceHash: 'LQjjK9NF0P9MXHGamZr4CaZsDgQ='
        });
      FacebookAds.createNativeAd("1487848894642151_1500835616676812",function(data){
        console.log("Success: ... ",data)
      })
    }
    //
    document.addEventListener("onAdLoaded", function(data){
      let temp: any = data;
      if(temp.adType === "native"){
        console.log("fbNativeAds: ",data)
      }
    })

  }

}
