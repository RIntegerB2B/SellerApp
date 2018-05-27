import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isMainCollapsed: Boolean = true;
  isMenMenuCollapsed: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggleMainMenu() {
    this.isMainCollapsed = !this.isMainCollapsed;
  }

  toggleMenMenu() {
    this.isMenMenuCollapsed = !this.isMenMenuCollapsed;
  }

}
