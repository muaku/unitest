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
        

      // work with storage
      this.storage.ready().then(() => {
        this.storage.get('user').then((val) => {
          console.log("val: ",val)
          // this.rootPage = "Tabs"
          // splashScreen.hide();

          // if Logged in
          if(val){
            if(val.isLoggedIn === true){
              this.rootPage = "Tabs"
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
}

