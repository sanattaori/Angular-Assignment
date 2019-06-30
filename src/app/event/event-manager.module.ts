import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { EventManagerAppComponent } from './event-manager-app.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material';

const routes: Routes = [
  {path: '', component: EventManagerAppComponent,
  children: [
    {path: '', component: MainContentComponent}
  ] },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [EventManagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [EventManagerAppComponent]
})
export class EventManagerModule { }
