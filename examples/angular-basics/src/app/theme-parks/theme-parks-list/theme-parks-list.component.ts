import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ParksService, ThemeParkGroup } from '../../shared';

@Component({
  selector: 'app-theme-parks-list',
  templateUrl: './theme-parks-list.component.html',
  styleUrls: ['./theme-parks-list.component.css']
})
export class ThemeParksListComponent implements OnInit {

  themeParks: Observable<ThemeParkGroup[]>;

  constructor(
    private parksService: ParksService
  ) { }

  ngOnInit() {
    this.themeParks = this.parksService.getParksFake();
  }

}
