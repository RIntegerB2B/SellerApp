import { Component, OnInit } from '@angular/core';
import { NavHeaderService } from '../../shared/nav-header/nav-header.service';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isMainCollapsed: Boolean = true;
  isMenMenuCollapsed: Boolean = true;
  menuVisible: boolean;
  toggleMenuBar = 'colapseMenuBar';
  readonly VAPID_PUBLIC_KEY = 'BIvwBoUek8ZLiE2HRr_srixb0Qi-Ql6CVBhhhvIuuZ5PMFYrfP0zSkNRrHD-uvIBhJ3_BDmzSFedMzu5ZuaVVRM';

  constructor(public navHeaderService: NavHeaderService, private swUpdate: SwUpdate, private swPush: SwPush) { }

  ngOnInit() {
    
  }
  toggleMainMenu() {
    this.isMainCollapsed = !this.isMainCollapsed;
  }

  toggleMenMenu() {
    this.isMenMenuCollapsed = !this.isMenMenuCollapsed;
  }

  toggleMenu() {
    this.toggleMenuBar = this.toggleMenuBar === 'colapseMenuBar' ? 'expandMenuBar' : 'colapseMenuBar';
  }

  subscribe() {
    alert('subscribe');
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.navHeaderService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }

  hideMenu() { this.menuVisible = false; }

  showMenu() { this.menuVisible = true; }

}
