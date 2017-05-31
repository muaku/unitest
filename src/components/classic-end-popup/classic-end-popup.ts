import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular'
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { Http } from '@angular/http';  

import 'rxjs/add/operator/map';

@Component({
  selector: 'classic-end-popup',
  templateUrl: 'classic-end-popup.html'
})
export class ClassicEndPopup {

  @Input() score;

  constructor(public navCtrl: NavController, public socailSharing: SocialSharing,
              public screenshot: Screenshot, public http: Http) {
    
  }

  goHome() {
    console.log("go Home")
    this.navCtrl.push("Tabs")
  }
  goNewGame() {
    console.log("go new game")
    this.navCtrl.push("Mode")
  }

  fbShare() {
    var message = "Test message"
    //var img = "https://graph.facebook.com/1274880022561831/picture?type=small"
    var url = "https://graph.facebook.com/me/feed?access_token=QVFIUjQ2LWgyU0dCenRRbUlCejFmY2VxTnFqNUYxTkh5eVhQWHE5Wjc1RHpJMUJNX2MydUZAycnhzTlp6R3lkdGJBeFhSTFkwRWd6OWNZAR1U5T1lsbGpoVUVR"

    this.http.post(url, {message: "Test message"}).map(res => {
      res.json()
    }).subscribe(data => {
      console.log("data: ", JSON.stringify(data))
    })




    // this.screenshot.URI(80).then((res) => {
    //   var options = {
    //     message: "Try unitest for university question", // Facebook and Instragram not support
    //     caption: "Test Caption",
    //     subject: "unitest", // for email
    //     files: [res.URI],
    //     url: "https://google.com",
    //     chooserTitle: "unitest"
    //   }
      

    //   // this.socailSharing.shareWithOptions(options).then(() => {
    //   //   alert("DONE")
    //   // }).catch((err) => {
    //   //   console.log(err)
    //   // })

    // }).catch((err) => {
    //   console.log(err)
    // })




    
    
  }

}
