import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBookingsComponent } from './my-bookings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: MyBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBookingsRoutingModule { }
