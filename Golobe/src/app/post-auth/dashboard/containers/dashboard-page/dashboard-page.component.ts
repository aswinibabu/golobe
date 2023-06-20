import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  defaultTabIndex = 1;
  constructor() { }

  ngOnInit(): void {
  }
  onTabChanged(event: MatTabChangeEvent): void {
    this.defaultTabIndex = event.index;
  }
}
