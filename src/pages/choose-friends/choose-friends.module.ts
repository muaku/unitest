import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseFriends } from './choose-friends';

import { SharedModule } from '../../components/shared/shared.module'

@NgModule({
  declarations: [
    ChooseFriends,
  ],
  imports: [
    IonicPageModule.forChild(ChooseFriends),
    SharedModule
  ],
  exports: [
    ChooseFriends
  ]
})
export class ChooseFriendsModule {}
