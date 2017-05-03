import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Mode } from './mode';
import { SharedModule } from '../../components/shared/shared.module'

@NgModule({
  declarations: [
    Mode,
  ],
  imports: [
    IonicPageModule.forChild(Mode),
    SharedModule
  ],
  exports: [
    Mode
  ]
})
export class ModeModule {}
