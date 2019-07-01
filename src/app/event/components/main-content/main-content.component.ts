import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// load json file locally
import SampleJson from '../../../../assets/data.json';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
  events:any;

  public EventFilter: string;
  @Output() toggleSideNav = new EventEmitter<void>();

  constructor() {
    console.log(SampleJson);
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.events = SampleJson;
  }

}
