import { Component, OnInit } from '@angular/core';

// load json file locally
import SampleJson from '../../../../assets/data.json';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {
  events:any;

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
