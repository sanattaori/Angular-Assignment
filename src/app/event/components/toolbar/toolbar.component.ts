import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public EventFilter: string;
  @Output() toggleSideNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


}
