import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private dataStore: {
    events: Event[]
  };

  constructor(private http: HttpClient, private router: Router) {
    this.dataStore = {events: []};
  }

  loadAll() {
    const downloadJsonUrl = this.router.url + '/assets/data.json';
    console.log(downloadJsonUrl);
    return this.http.get<Event[]>(downloadJsonUrl)
    .subscribe(data => {
      this.dataStore.events = data;
    }, error => {
      console.log('error: no json file' + error);
    });
  }
}
