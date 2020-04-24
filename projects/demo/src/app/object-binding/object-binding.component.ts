import { Component } from '@angular/core';

@Component({
  selector: 'app-object-binding',
  templateUrl: './object-binding.component.html',
  styleUrls: [ './object-binding.component.scss' ]
})
export class ObjectBindingComponent {

  list = [];

  first = { text: 'One', value: 1 };
  second = { text: 'Two', value: 2 };
  third = { text: 'Three', value: 3 };
  list2 = [];

}
