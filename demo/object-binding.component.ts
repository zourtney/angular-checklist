import { Component } from '@angular/core';


@Component({
  selector: 'chk-object-binding',
  styles: [`
    .example2 {
      margin-top: 100px;
    }
  `],
  template: `
    <p>Use bracket <code>[]</code> syntax to bind to non-string primitives, or to variables.</p>

    <div class="code" ngNonBindable>
      &lt;label&gt;<br/>
      &nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklistValue]="1" /&gt;<br/>
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
               [checklistValue]="1" />
        One
      </label>

      <label>
        <input type="checkbox"
               [(checklist)]="list"
               [checklistValue]="2" />
        Two
      </label>

      <label>
        <input type="checkbox"
               [(checklist)]="list"
               [checklistValue]="3" />
        Three
      </label>
    </div>

    <div class="output">
      list = {{list | json}}
    </div>


    <div class="example2 code" ngNonBindable>
      &#64;Component(&#123;<br/>
      &nbsp;&nbsp;template: &#96;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklistValue]="first.value" /&gt;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;&#123;first.text&#125;&#125;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;...<br/>
      &nbsp;&nbsp;&#96;<br/>&#125;)<br/>
      export class DemoComponent &#123;<br/>
      &nbsp;&nbsp;first = &#123; text: 'One', value: 1 &#125;;<br/>
      &nbsp;&nbsp;second = &#123; text: 'Two', value: 2 &#125;;<br/>
      &nbsp;&nbsp;third = &#123; text: 'Three', value: 3 &#125;;<br/>
      &#125;
    </div>

    <div class="demo">
      <label>
        <input type="checkbox"
               [(checklist)]="list2"
               [checklistValue]="first.value" />
        {{first.text}}
      </label>

      <label>
        <input type="checkbox"
               [(checklist)]="list2"
               [checklistValue]="second.value" />
        {{second.text}}
      </label>

      <label>
        <input type="checkbox"
               [(checklist)]="list2"
               [checklistValue]="third.value" />
        {{third.text}}
      </label>
    </div>

    <div class="output">
      list2 = {{list2 | json}}
    <div>
  `,
})
export class ObjectComponent {
  list = [];

  first = { text: 'One', value: 1 };
  second = { text: 'Two', value: 2 };
  third = { text: 'Three', value: 3 };
  list2 = [];
}
