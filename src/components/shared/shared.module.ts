import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { Shared } from './shared';

import { Heartcoin } from '../heartcoin/heartcoin'
import { WaitingBox } from '../waiting-box/waiting-box'
import { ClassicScore } from '../classic-score/classic-score'
import { FriendTemplate } from '../friend-template/friend-template'

import { HeartcoinModule } from '../heartcoin/heartcoin.module'
import { QuestionTemplate } from '../question-template/question-template'
import { AnswerPopup } from '../answer-popup/answer-popup'
import { ClassicEndPopup } from '../classic-end-popup/classic-end-popup'
import { TryagainPopup } from '../tryagain-popup/tryagain-popup'

@NgModule({
  declarations: [
    Shared,WaitingBox,ClassicScore,QuestionTemplate,FriendTemplate,AnswerPopup,ClassicEndPopup,TryagainPopup
  ],
  imports: [
    IonicPageModule.forChild(Shared),
    CommonModule,
    HeartcoinModule
  ],
  exports: [
    Shared,
    CommonModule,
    FormsModule,
    HeartcoinModule,
    WaitingBox,
    ClassicScore,
    QuestionTemplate,
    FriendTemplate,
    AnswerPopup,
    ClassicEndPopup,
    TryagainPopup
  ]
})
export class SharedModule {}
