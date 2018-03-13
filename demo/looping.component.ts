import { Component } from '@angular/core';


@Component({
  selector: 'chk-looping',
  template: `
    <p>Use bracket <code>[]</code> syntax to bind to <code>*ngFor</code> variables.</p>
    <div class="code" ngNonBindable>
      &lt;label *ngFor="let opt of options"&gt;<br/>
      &nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklistValue]="opt.value" /&gt;<br/>
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
               [checklistValue]="opt.value" />
        {{opt.text}}
      </label>
    </div>

    <div class="output">
      list = {{list | json}}
    </div>
  `,
})
export class LoopingComponent {
  list = [];

  options = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 },
  ];
}
