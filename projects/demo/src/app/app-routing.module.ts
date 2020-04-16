import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GettingStartedComponent } from './getting-started/getting-started.component';
import { LoopingComponent } from './looping/looping.component';
import { MaxSelectionComponent } from './max-selection/max-selection.component';
import { ObjectBindingComponent } from './object-binding/object-binding.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';


const routes: Routes = [
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'two-way', component: TwoWayComponent },
  { path: 'one-way', component: OneWayComponent },
  { path: 'objects', component: ObjectBindingComponent },
  { path: 'looping', component: LoopingComponent },
  { path: 'max-selection', component: MaxSelectionComponent },
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
