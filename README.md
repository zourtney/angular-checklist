# angular-checklist

A simple Angular 2 directive to bind multiple `input[type="checkbox"]` controls
to a single output array.


```html
<input type="checkbox" [checklist]="myArray" checklistValue="myVal1" />
```


```ts
@Component({
  selector: 'demo',
  template: `
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
  `,
})
export class DemoComponent {
  list = [2];  // will auto-check pre-populated values
}
```


## Installation

Install via NPM:

```
npm install --save angular-checklist
```



## Add to module `imports`

Import the dependency, then add to your `NgModule`'s `imports` array.

```ts
import { ChecklistModule } from 'angular-checklist';

@NgModule({
  imports: [
    /* others */
    ChecklistModule,
  ],
})
export class AppModule { }
```



## Use it in your template

Designed to effortlessly work with both one- and two-way binding syntaxes means
`angular-checklist` is **immutable friendly**.


#### Two-way binding

For standard forms, simply use Angular's two-way binding ("box of bananas")
syntax. This will update your `list` after every change.

```html
<input type="checkbox"
       [(checklist)]="list"
       checklistValue="1" />
```


#### One-way binding

For finer control, use one-way binding syntax. `$event` will contain an
updated, shallow copy of `list`.

```html
<input type="checkbox"
       [checklist]="list"
       (checklistChange)="store.updateList($event)"
       checklistValue="1" />
```


#### Looping and Object binding

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
## Note
- Added support of Object as checklistValue, so you can pass object to checklistValue.

## Credits

- Inspired by the Vitalets [checklist-model](https://vitalets.github.io/checklist-model/) for Angular 1.
- A few core ideas taken from [ng2-checklist](https://github.com/amaanm/ng2-checklist)