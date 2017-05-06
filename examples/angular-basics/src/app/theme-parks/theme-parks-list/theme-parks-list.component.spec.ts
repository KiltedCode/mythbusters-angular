import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeParksListComponent } from './theme-parks-list.component';

describe('ThemeParksListComponent', () => {
  let component: ThemeParksListComponent;
  let fixture: ComponentFixture<ThemeParksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeParksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeParksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
