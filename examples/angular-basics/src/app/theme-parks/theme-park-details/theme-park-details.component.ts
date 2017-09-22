import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ParksService, ThemePark } from '../../shared';

@Component({
  selector: 'app-theme-park-details',
  templateUrl: './theme-park-details.component.html',
  styleUrls: ['./theme-park-details.component.css']
})
export class ThemeParkDetailsComponent implements OnInit {

  edited: boolean;
  favorite: boolean;
  themePark: ThemePark;

  constructor(
    private route: ActivatedRoute,
    private parksService: ParksService
  ) { }

  canDeactivate(): Promise<boolean> | boolean {
    if(!this.edited) {
      return true;
    } else {
      return new Promise<boolean>(resolve => {
        return resolve(window.confirm('Are you sure you want to leave the page without saving your changes?'));
      });
    }
  }

  ngOnInit() {
    this.edited = false;
    this.favorite = false;

    this.route.params
      .switchMap((params: Params) => this.parksService.getParkDetailsFake(params['parkId']))
      .subscribe(
        (park: ThemePark) => {
          this.themePark = park;
        },
        error => {
          console.log('How did this error, it\'s fake?', error);
        });
  }

  save(): void {
    this.edited = false;
  }

  toggleFavorite(): void {
    this.favorite = !this.favorite;
    this.edited = true;
  }

}
