import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChecklistDirective } from './directives/checklist.directive';


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
export class ChecklistModule { }
