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
import {MatCardModule} from '@angular/material/card';
import { EventsService } from './services/events.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { EventBookingComponent } from './event-booking.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {path: '', component: EventManagerAppComponent,
  children: [
    {path: '', component: MainContentComponent}
  ] },
  {path: 'event-booking/:id', component: EventBookingComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [EventManagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, EventBookingComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    EventsService
  ],
  bootstrap: [EventManagerAppComponent]
})
export class EventManagerModule { }
