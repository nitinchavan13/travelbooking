import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSerachResultComponent } from './flight-serach-result.component';

describe('FlightSerachResultComponent', () => {
  let component: FlightSerachResultComponent;
  let fixture: ComponentFixture<FlightSerachResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightSerachResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSerachResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
