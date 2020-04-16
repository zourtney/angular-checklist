import { Component } from '@angular/core';

@Component({
  selector: 'app-max-selection',
  templateUrl: './max-selection.component.html',
  styleUrls: [ './max-selection.component.scss' ]
})
export class MaxSelectionComponent {

  list = [];

  options = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
  ];

}
