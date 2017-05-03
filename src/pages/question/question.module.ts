import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Question } from './question';

import { SharedModule } from '../../components/shared/shared.module'

@NgModule({
  declarations: [
    Question,
  ],
  imports: [
    IonicPageModule.forChild(Question),
    SharedModule
  ],
  exports: [
    Question
  ]
})
export class QuestionModule {}
