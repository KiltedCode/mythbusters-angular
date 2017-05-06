import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeParkDetailsComponent } from './theme-park-details.component';

describe('ThemeParkDetailsComponent', () => {
  let component: ThemeParkDetailsComponent;
  let fixture: ComponentFixture<ThemeParkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeParkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeParkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
