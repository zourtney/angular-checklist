import { Directive, EventEmitter, Input, OnChanges, Output } from '@angular/core';


@Directive({
  host: {
    '(change)': 'triggerOnChange($event)',
    '[checked]': 'isChecked',
  },
  selector: '[checklist]',
})
export class ChecklistDirective implements OnChanges {
  // In
  @Input() checklist: any[];
  @Input() checklistValue: any;

  // Out
  @Output() checklistChange = new EventEmitter <any[]> ();

  // Local
  isChecked: boolean;

  ////////////

  ngOnChanges() {
    this.isChecked = this.checklist.indexOf(this.checklistValue) >= 0;
  }

  triggerOnChange($event) {
    const list = this.checklist;
    const val = this.checklistValue;
    let updatedList;

    if ($event.target.checked) {
      updatedList = [...list, val];
    }
    else {
      const i = this.checklist.indexOf(val);
      updatedList = [...list.slice(0, i), ...list.slice(i + 1)];
    }

    this.checklistChange.emit(updatedList);
  }
}
