import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { Advert } from '../../providers/advert'
import { AdMob } from '@ionic-native/admob';

declare var FacebookAds: any;

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  
  homeDisplay;
  profileDisplay:any;
  unregisterBackButtonAction: any

  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams,
              public advert: Advert, public admob: AdMob) {
    this.platform.ready().then(() => {
      console.log("Platform ready in tabs")
      this.registerAdsEvents()
      this.fbNativeAds()
    })
    this.profileDisplay = "none"

    

  }

  ionViewDidLoad() {
    console.log("Tabs Did load")
    
  }

  // Show banner Ads, show tabbar
  ionViewWillEnter(){
    // register back btn
    this.inittializeBackBtn()
    // show banner ads
    this.advert.showBanner()
  }
  // Hide banner Ads, hide tabbar
  ionViewWillLeave(){
    console.log("Tabs WILL LEAVE")
    this.advert.hideBanner()
  }

  // unregister back btn
  ionViewDidLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction()
  }

  inittializeBackBtn() {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.customHandleBackBtn()
    }, 10)
  }

  // back btn custom handler
  private customHandleBackBtn() {
    console.log("back button pressed")
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
    

  }

   // register ads events
  registerAdsEvents(){
    // on AdLoaded
    // this.admob.onAdLoaded().subscribe((data) => {
    //   console.log("onAdLoaded: ",data)
    // })
    //
    document.addEventListener("onAdLoaded", function(data){
      let temp: any = data;
      console.log("NativeAds: ",data)
      if(temp.adType == "native"){
        console.log("NativeAds inner: ",data)
      }
    })
    // on AdDismiss
    this.admob.onAdDismiss()
    .subscribe(() => { console.log('User dismissed ad'); });
    // on AdPresent, triggered when ads finished showing
    this.admob.onAdPresent().subscribe((data) => {
      console.log("on AdPresent and adType is ", data.adType)
      if(data.adType === "rewardvideo"){    // if user watch video ads
        // increase heart number
        console.log("you got "+data.rewardAmount+" "+data.rewardType)
      }
    })

  }

}
