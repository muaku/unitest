import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AdMob,AdMobOptions } from '@ionic-native/admob';
import { Platform } from 'ionic-angular';


@Injectable()
export class Advert {
  // Admob IDs from Admob console
  private adMobId: { banner: string, interstitial: string, reward: string}
  private banner_adOptions: AdMobOptions;

  constructor(public http: Http,public platform: Platform, public admob: AdMob) {
    platform.ready().then(() => {
      this.initAds()
    })
  }

  // init Admob
  private initAds(){
    if(!AdMob){
      console.log("Admob not found")
      return;
    }
    this.setAdmobIds()
    this.setAdmobOptions()
    //this.registerAdmobEvents()
    
  }
  // set Admob ids
  private setAdmobIds(){
    if(this.platform.is("android")){
      this.adMobId = {
        banner: "ca-app-pub-1074360168950420/8001080395",
        interstitial: "ca-app-pub-1074360168950420/9477813590",
        reward: "ca-app-pub-1074360168950420/5047613993"
      }
    }
    else if(this.platform.is("ios")){
      this.adMobId = {
        banner: "ca-app-pub-1074360168950420/5488265998",
        interstitial: "ca-app-pub-1074360168950420/6964999195",
        reward: "ca-app-pub-1074360168950420/8441732396"
      }
    }
  }

  // set Admob options
  private setAdmobOptions(){
    this.banner_adOptions = {
      adId: this.adMobId.banner,
      position: this.admob.AD_POSITION.TOP_CENTER,
      isTesting: true,
      overlap: true
    }
  }

  // register admob event
  // private registerAdmobEvents(){
  //   document.addEventListener("onAdFailLoad", data => console.log(JSON.stringify(data)))
  //   document.addEventListener('onAdLoaded', data => console.log(JSON.stringify(data)));
  //   document.addEventListener('onAdDismiss', data => console.log(JSON.stringify(data)));
  //   document.addEventListener('onAdLeaveApp', data => console.log(JSON.stringify(data)));
    
  //   // when video ads end, this function is trigged
  //   document.addEventListener('onAdPresent', function(data) {
  //     //console.log(data.adType)
  //     let jsonData = JSON.stringify(data)
  //     console.log(jsonData)
  //     // if(jsonData.adType === "rewardvideo"){
  //     //   console.log("you got "+ jsonData.rewardAmount + " " + jsonData.rewardType)
  //     // }
      

  //   });
  // }

  //
  public onAdPresent(){
    this.admob.onAdPresent().map(data => data.json()).subscribe(data => {
      console.log("onAdPresent: ")
    })
  }

  // public function, Showing banner Ads
  public showBanner(){
    if(!this.admob) return false;

    this.admob.createBanner(this.banner_adOptions).then(() => {
      this.admob.showBanner(2)
    })
    return true
  }

  // public function, Showing Interstitial Ads
  public showInterstitial(){
    if(!this.admob) return false;

    this.admob.prepareInterstitial({ adId: this.adMobId.interstitial}).then(() => {
      this.admob.showInterstitial()
    })
    return true
  }

  // public function, Showing rewarded Ads
  public showRewarded(){
    if(!this.admob) return false;

    this.admob.prepareRewardVideoAd({ adId: this.adMobId.reward }).then(() => {
      this.admob.showRewardVideoAd()
    })
    return true;
  }

  // Remove ads
  public removeAds() {
    if (this.admob) this.admob.removeBanner();
  }

  // Hide ads
  public hideBanner(){
    if(this.admob) this.admob.hideBanner()
  }

}
