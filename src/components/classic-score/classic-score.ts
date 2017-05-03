import { Component, Input } from '@angular/core';

/**
 * Generated class for the ClassicScore component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'classic-score',
  templateUrl: 'classic-score.html'
})
export class ClassicScore {

  @Input() data;

  constructor() {
    console.log('Hello ClassicScore Component');
  }

}
