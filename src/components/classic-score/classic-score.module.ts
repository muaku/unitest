import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassicScore } from './classic-score';

@NgModule({
  declarations: [
    ClassicScore,
  ],
  imports: [
    IonicPageModule.forChild(ClassicScore),
  ],
  exports: [
    ClassicScore
  ]
})
export class ClassicScoreModule {}
