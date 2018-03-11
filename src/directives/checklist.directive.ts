import { Directive, EventEmitter, Input, OnChanges, Output } from '@angular/core';


@Directive({
  host: {
    '(change)': 'triggerOnChange($event)',
    '[checked]': 'isChecked',
  },
  selector: '[checklist]',
})
export class ChecklistDirective implements OnChanges {
  @Input() checklist: any[];
  @Input() checklistValue: any;
  @Input() maxSelectedItems = -1;
  @Output() checklistChange = new EventEmitter<any[]>();
  isChecked: boolean;

  ////////////

  ngOnChanges() {
    const checklist = this.checklist || [];
    this.isChecked = checklist.indexOf(this.checklistValue) >= 0;
  }

  triggerOnChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    let updatedList;
    const checklist = this.checklist || [];

    if (target && target.checked) {
      if (this.maxSelectedItems === -1 || checklist.length < this.maxSelectedItems) {
        updatedList = [...checklist, this.checklistValue];
        this.checklistChange.emit(updatedList);
      } else {
        target.checked = false;
      }
    } else {
      const i = checklist.indexOf(this.checklistValue);
      updatedList = [...checklist.slice(0, i), ...checklist.slice(i + 1)];
      this.checklistChange.emit(updatedList);
    }
  }
}
