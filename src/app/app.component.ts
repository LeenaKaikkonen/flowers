import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Main Menu', url: '/main', icon: '' },
    { title: 'About', url: '/about', icon: 'information' },
  ];
  constructor() {}
}
