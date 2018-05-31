import { Component, OnInit } from '@angular/core';
import {NavHeaderService} from '../../shared/nav-header/nav-header.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private navHeaderService: NavHeaderService) { }

  ngOnInit() {
    this.navHeaderService.makeMenuTransparent();
  }

}
