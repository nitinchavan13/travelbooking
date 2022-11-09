import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'flight-details',
    loadChildren: () => import('./features/flight-details/flight-details.module').then(m => m.FlightDetailsModule)
  },
  // {
  //   path: 'flight-booking',
  //   loadChildren: () => import('./features/flight-booking/flight-booking.module').then(m => m.FlightBookingModule)
  // },
  {
    path: 'my-trips',
    loadChildren: () => import('./features/my-bookings/my-bookings.module').then(m => m.MyBookingsModule)
  },
  {
    path: 'holiday-packages',
    loadChildren: () => import('./features/holiday-packages/holiday-packages.module').then(m => m.HolidayPackagesModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
