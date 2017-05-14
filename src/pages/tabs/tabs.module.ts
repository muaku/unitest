import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tabs } from './tabs';

import { SharedModule } from '../../components/shared/shared.module'
import { Home } from '../home/home'
import { Profile } from '../profile/profile'

@NgModule({
  declarations: [
    Tabs,
    Home,
    Profile
   
  ],
  imports: [
    IonicPageModule.forChild(Tabs),
    SharedModule
  ],
  exports: [
    Tabs
  ]
})
export class TabsModule {}
