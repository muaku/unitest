import { Component } from '@angular/core';


@Component({
  selector: 'shared',
  templateUrl: 'shared.html'
})
export class Shared {

  text: string;

  constructor() {
    console.log('Hello Shared Component');
    this.text = 'Hello World';
  }

}
