import { Component, Input } from '@angular/core';


@Component({
  selector: 'friend-template',
  templateUrl: 'friend-template.html'
})
export class FriendTemplate {

  @Input() data;

  constructor() {
    console.log('Hello FriendTemplate Component');
  }

}
