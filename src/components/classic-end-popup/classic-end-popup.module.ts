import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassicEndPopup } from './classic-end-popup';

@NgModule({
  declarations: [
    ClassicEndPopup,
  ],
  imports: [
    IonicPageModule.forChild(ClassicEndPopup),
  ],
  exports: [
    ClassicEndPopup
  ]
})
export class ClassicEndPopupModule {}
