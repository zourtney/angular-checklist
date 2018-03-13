import { Component } from '@angular/core';


@Component({
  selector: 'chk-two-way',
  template: `
    <p>Use Angular's two-way binding syntax ("box of bananas") to update the <code>checklist</code> array after every change.</p>

    <div class="compatibility">
      <div class="compatibility-version">1.3</div>
      As of version <code>1.3</code>, the <code>checklist</code> input can be initially falsy. In older versions, it must be initialized to a
      valid array. See <a href="https://github.com/zourtney/angular-checklist/pull/5">pull request 5</a>.
    </div>

    <div class="code" ngNonBindable>
      &lt;label&gt;<br/>
      &nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
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
               [(checklist)]="list"
               checklistValue="1" />
        One
      </label>

      <label>
        <input type="checkbox"
               [(checklist)]="list"
               checklistValue="2" />
        Two
      </label>

      <label>
        <input type="checkbox"
               [(checklist)]="list"
               checklistValue="3" />
        Three
      </label>
    </div>

    <div class="output">
      list = {{list | json}}
    </div>
  `,
})
export class TwoWayComponent {
  list: string[];
}
