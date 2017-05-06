import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { ThemePark } from './theme-park.model';
import { ThemeParkGroup } from './theme-park-group.model';

@Injectable()
export class ParksService {

  private fakeData: any = {};

  constructor(private http: Http) {
    this.fakeData = {
      wdw : {
        company: 'Walt Disney World',
        id: 'wdw',
        location: 'Orlando, FL',
        parks: [
          {
            name: 'Magic Kingdom',
            stars: 5
          },
          {
            name: 'Epcot',
            stars: 4
          },
          {
            name: 'Disney\'s Hollywood Studios',
            stars: 3
          },
          {
            name: 'Disney\'s Animal Kingdom',
            stars: 4
          }
        ]
      },
      universal: {
        company: 'Universal Orlando Resort',
        id: 'universal',
        location: 'Orlando, FL',
        parks: [
          {
            name: 'Universal Studios Florida',
            stars: 4
          },
          {
            name: 'Universal\'s Islands of Adventure',
            stars: 5
          }
        ]
      }
    };
    console.log('fakeData', this.fakeData);
   }

  getParks(): Observable<ThemeParkGroup[]> {
    let url: string = `/api/parks/list`;
    return this.http.get(url)
            .map(response => response.json() as ThemeParkGroup[])
            .catch(this.handleError);
  }

  getParkDetails(parkId: string): Observable<ThemePark> {
    let url: string = `/api/parks/${parkId}`;
    return this.http.get(url)
            .map(response => response.json() as ThemePark)
            .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
      console.error('An error occurred', error);
      return Observable.throw(error.message || error);
  }

  getParkDetailsFake(parkId: string): Observable<ThemePark> {
    let park = this.fakeData[parkId];
    return Observable.of(park);
  }

  getParksFake(): Observable<ThemeParkGroup[]> {
    let parks: ThemeParkGroup[] = [];
    console.log('fd', this.fakeData);
    parks.push(this.fakeData.wdw);
    return Observable.create(observer => {
      try {
        observer.next(parks);
        Observable.timer(2000)
          .subscribe(x => {
            parks.push(
              this.fakeData['universal']
            );
            observer.next(parks);
          })
        
      }
      catch(e) {
        observer.error(e);
      }
    });
  }

}
