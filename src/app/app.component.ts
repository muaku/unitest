import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

declare var FCMPlugin;
declare var FirebasePlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
              public storage: Storage) {
    platform.ready().then(() => {

      // test timer
      //this.countdownTimer(1, 0, 5)
        
      // work with storage
      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
          console.log("val: ",val)

          // if Logged in
          if(val){
            if(val.isLoggedIn === true){
              this.rootPage = "Home"
              splashScreen.hide();
            }
          }
          else{
            this.rootPage = "Login"
            splashScreen.hide();
          }

          // grant permission (ios only)
         if(platform.is("ios")){
            FirebasePlugin.grantPermission();
          }
         FirebasePlugin.hasPermission(function(data){
              console.log(data.isEnabled);
          });

          // firebase notification
          FirebasePlugin.getToken(function(token) {
              // save this server-side and use it to push notifications to this device
              console.log(token);
          }, function(error) {
              console.error(error);
          });

          // trigger when user click on notification or just log when app in foreground
          FirebasePlugin.onNotificationOpen(function(notification) {
              console.log("notification", notification);
          }, function(error) {
              console.error(error);
          });

        })
     })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      
    });
  }

  // updateTimer(){

  //   this.msLeft = this.endTime - (+new Date)  //Date in millisec
  //   if(this.msLeft < 1000){
  //     // do something
  //   }else {
  //     this.time = new Date(this.msLeft) // convert millisec to Date type
  //     this.hours = this.time.getUTCHours()
  //     this.mins = this.time.getUTCMinutes()
  //     this.seconds = this.time.getUTCSeconds()
  //     console.log(this.hours +":"+this.mins +":"+ this.seconds)
  //     setTimeout(this.updateTimer,500)
  //   }

  // }

 

   

}

