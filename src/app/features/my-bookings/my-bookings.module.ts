import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookingsComponent } from './my-bookings.component';
import { MyBookingsRoutingModule } from './my-bookings.routes';

@NgModule({
  declarations: [
    MyBookingsComponent
  ],
  imports: [
    CommonModule,
    MyBookingsRoutingModule
  ]
})
export class MyBookingsModule { }
