import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerPopup } from './answer-popup';

@NgModule({
  declarations: [
    AnswerPopup,
  ],
  imports: [
    IonicPageModule.forChild(AnswerPopup),
  ],
  exports: [
    AnswerPopup
  ]
})
export class AnswerPopupModule {}
