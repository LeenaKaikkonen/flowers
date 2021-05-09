import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public appPages = [
    { title: 'About', url: '/folder/Spam', icon: 'information' },
  ];

  constructor() { }

  ngOnInit() {}

}
