import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { Shared } from './shared';

import { WaitingBoxModule } from '../waiting-box/waiting-box.module'
import { FriendTemplateModule } from '../friend-template/friend-template.module'

import { HeartcoinModule } from '../heartcoin/heartcoin.module'
import { QuestionTemplateModule } from '../question-template/question-template.module'
import { AnswerPopupModule } from '../answer-popup/answer-popup.module'
import { ClassicEndPopupModule } from '../classic-end-popup/classic-end-popup.module'
import { TryagainPopupModule } from '../tryagain-popup/tryagain-popup.module'

@NgModule({
  declarations: [
    Shared,
  ],
  imports: [
    IonicPageModule.forChild(Shared),
    CommonModule,
  ],
  exports: [
    Shared,
    CommonModule,
    FormsModule,
    HeartcoinModule,
    WaitingBoxModule,
    QuestionTemplateModule,
    FriendTemplateModule,
    AnswerPopupModule,
    ClassicEndPopupModule,
    TryagainPopupModule
  ]
})
export class SharedModule {}
