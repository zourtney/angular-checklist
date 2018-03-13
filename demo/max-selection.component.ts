import { Component } from '@angular/core';


@Component({
  selector: 'chk-max-selection',
  template: `
    <p>Use <code>maxSelectedItems</code> to limit the number of possibly selected items.</p>

    <div class="compatibility">
      <div class="compatibility-version">1.3</div>
      This feature is only available in <code>&gt;= 1.3</code>. See <a href="https://github.com/zourtney/angular-checklist/pull/6">pull request 6</a>.
    </div>

    <div class="code" ngNonBindable>
      &lt;label *ngFor="let opt of options"&gt;<br/>
      &nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklistValue]="opt.value"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[maxSelectedItems]="2" /&gt;<br/>
      &nbsp;&nbsp;{{opt.text}}<br/>
      &lt;/label&gt;
      <br/>
      <br/>
      ...
    </div>

    <div class="demo">
      <label *ngFor="let opt of options">
        <input type="checkbox"
               [(checklist)]="list"
               [checklistValue]="opt.value"
               [maxSelectedItems]="2" />
        {{opt.text}}
      </label>
    </div>

    <div class="output">
      list = {{list | json}}
    </div>
  `,
})
export class MaxSelectionComponent {
  list = [];

  options = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
  ];
}
