import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightDetailsComponent } from './flight-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FlightDetailsComponent
  },
  {
    path: 'flight-booking',
    pathMatch: 'prefix',
    component: FlightBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightDetailsRoutingModule { }
