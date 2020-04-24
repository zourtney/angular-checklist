import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChecklistModule } from 'angular-checklist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ObjectBindingComponent } from './object-binding/object-binding.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { LoopingComponent } from './looping/looping.component';
import { MaxSelectionComponent } from './max-selection/max-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    OneWayComponent,
    TwoWayComponent,
    ObjectBindingComponent,
    GettingStartedComponent,
    LoopingComponent,
    MaxSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChecklistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
