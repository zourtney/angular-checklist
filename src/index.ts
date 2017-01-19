import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChecklistDirective } from './checklist';


@NgModule({
  declarations: [
    ChecklistDirective,
  ],
  exports: [
    ChecklistDirective,
  ],
  imports: [
    CommonModule,
  ],
})
export class AngularChecklistModule { }
