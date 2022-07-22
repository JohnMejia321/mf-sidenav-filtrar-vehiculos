import { Component } from '@angular/core';

@Component({
  selector: 'mf-sidenav-izquierdo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'admin-panel-layout';
  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
