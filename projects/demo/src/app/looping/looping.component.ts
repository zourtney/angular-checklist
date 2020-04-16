import { Component } from '@angular/core';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrls: [ './looping.component.scss' ]
})
export class LoopingComponent {

  list = [];

  options = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
  ];

}
