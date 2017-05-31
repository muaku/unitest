import { Component, ViewChild, Renderer, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mode',
  templateUrl: 'mode.html',
})
export class Mode {

  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild("classicBtn", {read: ElementRef}) classicBtn;
  @ViewChild("challengeBtn", {read: ElementRef}) challengeBtn;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public renderer: Renderer) {
   
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.push("Tabs")
    }
  }

  ionViewWillEnter(){
    this.renderer.setElementStyle(this.classicBtn.nativeElement, "top", "0px")
    this.renderer.setElementStyle(this.classicBtn.nativeElement, "box-shadow", "0px 5px 3px 1px rgba(16, 98, 112, 1)")
    this.renderer.setElementStyle(this.challengeBtn.nativeElement, "top", "0px")
    this.renderer.setElementStyle(this.challengeBtn.nativeElement, "box-shadow", "0px 5px 3px 1px rgba(16, 98, 112, 1)")
   
  }

  classicFunc() {
    // Do some effect
    this.renderer.setElementStyle(this.classicBtn.nativeElement, "top", "3px")
    this.renderer.setElementStyle(this.classicBtn.nativeElement, "box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0)")
    setTimeout(() => {
      this.navCtrl.push("GameClassic")
    },300)
  }

  challengeFunc() {
    // Do some effect
    this.renderer.setElementStyle(this.challengeBtn.nativeElement, "top", "3px")
    this.renderer.setElementStyle(this.challengeBtn.nativeElement, "box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0)")
    setTimeout(() => {
      this.navCtrl.push("GameChallenge")
    },300)
  }

  

 

}
