import { Component, Input } from '@angular/core';

/**
 * Generated class for the QuestionTemplate component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'question-template',
  templateUrl: 'question-template.html'
})
export class QuestionTemplate {

  @Input() data;


  constructor() {
  }

  

}
