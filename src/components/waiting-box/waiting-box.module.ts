import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingBox } from './waiting-box';

@NgModule({
  declarations: [
    WaitingBox,
  ],
  imports: [
    IonicPageModule.forChild(WaitingBox),
  ],
  exports: [
    WaitingBox
  ]
})
export class WaitingBoxModule {}
