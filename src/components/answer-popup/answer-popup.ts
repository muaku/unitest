import { Component, Input } from '@angular/core';

/**
 * Generated class for the AnswerPopup component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'answer-popup',
  templateUrl: 'answer-popup.html'
})
export class AnswerPopup {

  @Input() showText
  constructor() {
  }

}
