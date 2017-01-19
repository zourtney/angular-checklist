Installation
============

Install via NPM:

```
npm install --save angular-checklist
```



Add to module `imports`
=======================

Import the dependency, then add to your `NgModule`'s `imports` array.

```ts
import { AngularChecklistModule } from 'angular-checklist';

@NgModule({
  imports: [
    /* others */
    AngularChecklistModule,
  ],
})
export class AppModule { }
```



Use it!
=======

Designed to effortlessly work with both one- and two-way binding syntaxes means
`angular-checklist` is **immutable friendly**.


Two-way binding
---------------

For standard forms, simply use Angular's two-way binding ("box of bananas")
syntax. This will update your `list` after every change.

```html
<input type="checkbox"
       [(checklist)]="list"
       checklistValue="1" />
```


One-way binding
---------------

For finer control, use one-way binding syntax. `$event` will contain an
updated, shallow copy of `list`.

```html
<input type="checkbox"
       [checklist]="list"
       (checklistChange)="store.updateList($event)"
       checklistValue="1" />
```


Looping and Object binding
--------------------------

`angular-checklist` works great with `*ngFor`. Remember to use brackets `[]` to
bind non-string `checklistValue`s.

```ts
<label *ngFor="let opt of options">
  <input type="checkbox"
         [(checklist)]="list"
         [checklistValue]="opt.value" />
  {{opt.text}}
</label>
```
