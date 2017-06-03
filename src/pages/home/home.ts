import { Component, ViewChild, Renderer, ElementRef, AfterViewInit, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { WaitingMatches } from '../../providers/waiting-matches'
import { CounterProvider } from '../../providers/counter'

import { Advert } from '../../providers/advert'
import { AdMob } from '@ionic-native/admob';
import { Heartcoin } from '../../components/heartcoin/heartcoin'
import { HeartTimer } from "../../providers/heartTimer"

declare var FacebookAds: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  waitingDatas;
  unregisterBackButtonAction: any
  heartTimerDisplay
  coins = 20
  hearts = 0

  @ViewChild("newgameBtn", {read: ElementRef}) newgameBtn;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage, public fb: Facebook,
              public waitingProvider: WaitingMatches,public platform: Platform,
              public renderer: Renderer, public counter: CounterProvider,
              public advert: Advert, public admob: AdMob, public heartTimerService: HeartTimer) {

    this.platform.ready().then(() => {
      this.registerAdsEvents()
      this.fbNativeAds()
      // load waiting data
      this.loadWaiting()

    })
  }

   ngOnInit(){
    this.heartTimerService.countdownTime.subscribe(res => this.heartTimerDisplay = res)
  }

  ionViewDidLoad() {
    console.log("HOME Didload")

  }
  // Show banner Ads, show tabbar
  ionViewWillEnter(){
    // register back btn
    this.inittializeBackBtn()
    // show banner ads
    this.advert.showBanner()
    //
    
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
  //
  inittializeBackBtn() {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      this.customHandleBackBtn()
    }, 10)
  }
  // back btn custom handler
  private customHandleBackBtn() {
    console.log("back button pressed")
  }


  // loading waiting data
  loadWaiting (){
    this.waitingProvider.load().subscribe(data => {
      this.waitingDatas = data.waiting
    })
  }


  // newGame button
  newGame() {
    // if no heart left, then show option to buy heart or watch a video ads
    if(this.hearts <= 0) {
      // show pop up to buy heart all watch a video
      this.buyHeartWithCoins()
      //this.advert.showRewarded()
    }
    

    // Do some effect
    this.renderer.setElementStyle(this.newgameBtn.nativeElement, "top", "3px")
    this.renderer.setElementStyle(this.newgameBtn.nativeElement, "box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0)")
    setTimeout(() => {
      this.navCtrl.push("Mode")

    },300)
  }

  // buy heart using coins
  buyHeartWithCoins() {
    // -10 coins
    this.coins = this.coins - 10
    // +1 heart
    this.hearts = this.hearts + 1

    console.log("hearts: " + this.hearts +" coins: "+ this.coins)
  }

  //gotoProfile
  gotoProfile(){
    this.navCtrl.push("Profile")
  }
  //gotoHome
  gotoHome(){
    console.log("do nothing")
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

  
  countBtn() {
    this.heartCountdownTimer(1)
  }

  // countdown heartTimer
  heartCountdownTimer(hearts){
    this.heartTimerService.startHeartTimer(hearts)
  }
  



}
