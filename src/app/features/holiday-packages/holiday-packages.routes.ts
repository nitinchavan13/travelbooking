import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayPackageComponent } from './holiday-package/holiday-package.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HolidayPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayPackageRoutingModule { }
