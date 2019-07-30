import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballEventsComponent } from './football-events.component';

describe('FootballEventsComponent', () => {
  let component: FootballEventsComponent;
  let fixture: ComponentFixture<FootballEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
