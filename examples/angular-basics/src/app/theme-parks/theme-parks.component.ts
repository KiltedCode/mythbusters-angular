import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-parks',
  templateUrl: './theme-parks.component.html',
  styleUrls: ['./theme-parks.component.css']
})
export class ThemeParksComponent implements OnInit {

  greeting: string;

  constructor() { }

  ngOnInit() {
    this.greeting = 'Woooo! Theme Parks!';
  }

}
