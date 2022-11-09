import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './flight-details.component';
import { FlightDetailsRoutingModule } from './flight-details.routes';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';

@NgModule({
  declarations: [
    FlightDetailsComponent,
    FlightBookingComponent
  ],
  imports: [
    CommonModule,
    FlightDetailsRoutingModule
  ]
})
export class FlightDetailsModule { }
