import { Component } from '@angular/core';


@Component({
  selector: 'chk-one-way',
  template: `
    <p>For immutable <code>checklist</code> arrays, use Angular's one-way binding syntax. All checkboxes in the group will update when the array instance changes.</p>
    <div class="code" ngNonBindable>
      &lt;label&gt;<br/>
      &nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklist]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(checklistChange)="list = $event;"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checklistValue="1" /&gt;<br/>
      &nbsp;&nbsp;One<br/>
      &lt;/label&gt;
      <br/>
      <br/>
      ...
    </div>

    <div class="demo">
      <label>
        <input type="checkbox"
               [checklist]="list"
               (checklistChange)="list = $event;"
               checklistValue="1" />
        One
      </label>

      <label>
        <input type="checkbox"
               [checklist]="list"
               (checklistChange)="list = $event;"
               checklistValue="2" />
        Two
      </label>

      <label>
        <input type="checkbox"
               [checklist]="list"
               (checklistChange)="list = $event;"
               checklistValue="3" />
        Three
      </label>
    </div>

    <div class="output">
      list = {{list | json}}
    </div>
  `,
})
export class OneWayComponent {
  list = [];
}
