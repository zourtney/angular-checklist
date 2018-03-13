import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

import { ChecklistModule } from '../src/index';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './getting-started.component';
import { LoopingComponent } from './looping.component';
import { MaxSelectionComponent } from './max-selection.component';
import { ObjectComponent } from './object-binding.component';
import { OneWayComponent } from './one-way.component';
import { TwoWayComponent } from './two-way.component';


const appRoutes = [
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'looping', component: LoopingComponent },
  { path: 'objects', component: ObjectComponent },
  { path: 'one-way', component: OneWayComponent },
  { path: 'two-way', component: TwoWayComponent },
  { path: 'max-selection', component: MaxSelectionComponent },
  { path: '**', component: GettingStartedComponent },
];


@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    GettingStartedComponent,
    LoopingComponent,
    ObjectComponent,
    OneWayComponent,
    TwoWayComponent,
    MaxSelectionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChecklistModule,
  ],
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
