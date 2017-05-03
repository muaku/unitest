import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Home } from './home';
import { SharedModule } from '../../components/shared/shared.module'

@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
    SharedModule
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
