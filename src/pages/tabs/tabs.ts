import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  
  homeDisplay;
  profileDisplay:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileDisplay = "none"
  }

  ionViewDidLoad() {
  }

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

}
