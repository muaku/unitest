import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TryagainPopup } from './tryagain-popup';

@NgModule({
  declarations: [
    TryagainPopup,
  ],
  imports: [
    IonicPageModule.forChild(TryagainPopup),
  ],
  exports: [
    TryagainPopup
  ]
})
export class TryagainPopupModule {}
