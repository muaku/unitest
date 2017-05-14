import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameChallenge } from './game-challenge';

import { SharedModule } from '../../components/shared/shared.module'

@NgModule({
  declarations: [
    GameChallenge,
  ],
  imports: [
    IonicPageModule.forChild(GameChallenge),
    SharedModule
  ],
  exports: [
    GameChallenge
  ]
})
export class GameChallengeModule {}
