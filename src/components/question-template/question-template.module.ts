import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionTemplate } from './question-template';

@NgModule({
  declarations: [
    QuestionTemplate,
  ],
  imports: [
    IonicPageModule.forChild(QuestionTemplate),
  ],
  exports: [
    QuestionTemplate
  ]
})
export class QuestionTemplateModule {}
