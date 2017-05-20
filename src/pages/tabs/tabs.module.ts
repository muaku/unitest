import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tabs } from './tabs';

import { SharedModule } from '../../components/shared/shared.module'
import { HomeModule } from '../home/home.module'
import { ProfileModule } from '../profile/profile.module'

@NgModule({
  declarations: [
    Tabs
   
  ],
  imports: [
    IonicPageModule.forChild(Tabs),
    SharedModule,
    HomeModule,
    ProfileModule
  ],
  exports: [
    Tabs
  ]
})
export class TabsModule {}
