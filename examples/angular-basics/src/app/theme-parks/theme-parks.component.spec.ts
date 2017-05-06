import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeParksComponent } from './theme-parks.component';

describe('ThemeParksComponent', () => {
  let component: ThemeParksComponent;
  let fixture: ComponentFixture<ThemeParksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeParksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
