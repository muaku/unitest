import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { Shared } from './shared';

import { Heartcoin } from '../heartcoin/heartcoin'
import { WaitingBox } from '../waiting-box/waiting-box'
import { ClassicScore } from '../classic-score/classic-score'

import { HeartcoinModule } from '../heartcoin/heartcoin.module'
import { QuestionTemplate } from '../question-template/question-template'

@NgModule({
  declarations: [
    Shared,WaitingBox,ClassicScore,QuestionTemplate
  ],
  imports: [
    IonicPageModule.forChild(Shared),
    CommonModule,
    HeartcoinModule
  ],
  exports: [
    Shared,CommonModule,FormsModule,HeartcoinModule,WaitingBox,ClassicScore,QuestionTemplate
  ]
})
export class SharedModule {}
