import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { GameClassic } from './game-classic';
import { SharedModule } from '../../components/shared/shared.module'

@NgModule({
  declarations: [
    GameClassic,
  ],
  imports: [
    IonicPageModule.forChild(GameClassic),
    SharedModule
  ],
  exports: [
    GameClassic
  ]
})
export class GameClassicModule {}
