import { Component } from '@angular/core';


@Component({
  selector: 'chk-getting-started',
  styles: [`
    h2 {
      margin-bottom: 5px;
    }
    h4 {
      margin: 15px 0 5px 0; 
    }
  `],
  template: `
    <h2>Installation</h2>
    <p>Install via NPM:</p>
    <div class="code">
      npm install --save angular-checklist
    </div>

    <h2>Add to module <code>imports</code></h2>
    <p>Import the dependency, then add to your <code>NgModule</code>'s <code>imports</code> array.</p>
    <div class="code">
      import {{'{'}} ChecklistModule {{'}'}} from 'angular-checklist';<br/>
      <br/>
      @NgModule({{'{'}}<br/>
      &nbsp;&nbsp;imports: [<br>
      &nbsp;&nbsp;&nbsp;&nbsp;/* others */<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;ChecklistModule,<br/>
      &nbsp;&nbsp;],<br/>
      {{'}'}})<br/>
      export class AppModule {{'{ }'}}
    </div>

    <h2>Use it!</h2>
    <p>Designed to effortlessly work with both one- and two-way binding syntaxes means <code>angular-checklist</code> is <strong>immutable friendly</strong>.</p>

    <h4>Two-way binding</h4>
    <p>For standard forms, simply use Angular's two-way binding ("box of bananas") syntax. This will update your <code>list</code> after every change.</p>
    <div class="code">
      &lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checklistValue="1" />
    </div>

    <h4>One-way binding</h4>
    <p>For finer control, use one-way binding syntax. <code>$event</code> will contain an updated, shallow copy of <code>list</code>.</p>
    <div class="code">
      &lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklist]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(checklistChange)="store.updateList($event)"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;checklistValue="1" />
    </div>

    <h4>Looping and Object Binding</h4>
    <p><code>angular-checklist</code> works great with <code>*ngFor</code>. Remember to use brackets <code>[]</code> to bind non-string <code>checklistValue</code>s.
    <div class="code" ngNonBindable>
      &lt;label *ngFor="let opt of options"&gt;<br/>
      &nbsp;&nbsp;&lt;input type="checkbox"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(checklist)]="list"<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[checklistValue]="opt.value" /><br/>
      &nbsp;&nbsp;{{opt.text}}<br/>
      &lt;/label&gt;
    </div>
  `,
})
export class GettingStartedComponent { }

