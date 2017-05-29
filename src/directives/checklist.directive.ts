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
  @Output() checklistChange = new EventEmitter<any[]>();
  isChecked: boolean;

  ////////////
  contains(obj: object) {
    const exist = this.checklist.some(val => JSON.stringify(obj) === JSON.stringify(val));
    return exist;
  }
  getIndex(obj: object) {
    this.checklist.some((val: any, key: any) => {
      if (JSON.stringify(obj) === JSON.stringify(val))
        return key;
    });
  }
  ngOnChanges() {
    if (this.checklist.length > 0) {
      if (typeof this.checklistValue === "object") {
        this.isChecked = this.contains(this.checklistValue);
      } else {
        this.isChecked = this.checklist.indexOf(this.checklistValue) >= 0;
      }
    }
  }

  triggerOnChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    let updatedList;
    let i: any = null;

    if (target && target.checked) {
      if (typeof this.checklistValue === "object") {
        this.checklist.push(this.checklistValue);
        updatedList = this.checklist;
      } else {
        updatedList = [...this.checklist, this.checklistValue];
      }
    }
    else {
      if (typeof this.checklistValue === "object") {
        i = this.getIndex(this.checklistValue);
        this.checklist.splice(i, 1);
        updatedList = this.checklist;
      } else {
        i = this.checklist.indexOf(this.checklistValue);
        updatedList = [...this.checklist.slice(0, i), ...this.checklist.slice(i + 1)];
      }
    }

    this.checklistChange.emit(updatedList);
  }
}
