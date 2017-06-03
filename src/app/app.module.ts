import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AdMob } from '@ionic-native/admob';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';

import { MyApp } from './app.component';
import { WaitingMatches } from '../providers/waiting-matches'
import { Classic } from '../providers/classic'
import { Advert } from '../providers/advert'
import { CounterProvider } from '../providers/counter';
import { HeartTimer } from '../providers/heartTimer';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'unidb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AdMob,
    WaitingMatches,
    Classic,
    Advert,
    SocialSharing,
    Screenshot,
    CounterProvider,
    HeartTimer,
  ]
})
export class AppModule {}
