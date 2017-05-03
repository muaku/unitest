import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {

      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
          console.log("val: ",val)
          this.rootPage = "Tabs"
          splashScreen.hide();
          // if Logged in
          // if(val){
          //   if(val.isLoggedIn === true){
          //     this.rootPage = "Home"
          //     splashScreen.hide();
          //   }
          // }
          // else{
          //   this.rootPage = "Login"
          //   splashScreen.hide();
          // }

        })
     })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
    });
  }
}

