import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { GameClassic } from './game-classic';
import { SharedModule } from '../../components/shared/shared.module'
import { ClassicScoreModule } from '../../components/classic-score/classic-score.module'

@NgModule({
  declarations: [
    GameClassic,
  ],
  imports: [
    IonicPageModule.forChild(GameClassic),
    SharedModule,
    ClassicScoreModule
  ],
  exports: [
    GameClassic
  ]
})
export class GameClassicModule {}
