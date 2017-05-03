import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Heartcoin } from './heartcoin';

@NgModule({
  declarations: [
    Heartcoin,
  ],
  imports: [
    IonicPageModule.forChild(Heartcoin),
  ],
  exports: [
    Heartcoin
  ]
})
export class HeartcoinModule {}
