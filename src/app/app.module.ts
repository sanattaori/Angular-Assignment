//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {path: '', component: ListingPageComponent,
//   children: [
//     {path: '', component: MainContentComponent}
//   ] },
//   {path: '**', redirectTo: ''}
// ];

const routes: Routes = [
  { path: 'eventmanager', loadChildren: './event/event-manager.module#EventManagerModule'},
  { path: '**', redirectTo: 'eventmanager' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppModule { }
