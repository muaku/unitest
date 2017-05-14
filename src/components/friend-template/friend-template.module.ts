import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendTemplate } from './friend-template';

@NgModule({
  declarations: [
    FriendTemplate,
  ],
  imports: [
    IonicPageModule.forChild(FriendTemplate),
  ],
  exports: [
    FriendTemplate
  ]
})
export class FriendTemplateModule {}
