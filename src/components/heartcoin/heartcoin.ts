import { Component } from '@angular/core';

/**
 * Generated class for the Heartcoin component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'heartcoin',
  templateUrl: 'heartcoin.html'
})
export class Heartcoin {

  text: string;

  constructor() {
    console.log('Hello Heartcoin Component');
    this.text = 'Hello World';
  }

}
