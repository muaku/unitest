import { Component, Input } from '@angular/core';

/**
 * Generated class for the WaitingBox component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'waiting-box',
  templateUrl: 'waiting-box.html'
})
export class WaitingBox {

  @Input() data;

  constructor() {
    console.log('Hello WaitingBox Component');
  }

}
