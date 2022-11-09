import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayPackageComponent } from './holiday-package/holiday-package.component';
import { HolidayPackageRoutingModule } from './holiday-packages.routes';

@NgModule({
  declarations: [
    HolidayPackageComponent
  ],
  imports: [
    CommonModule,
    HolidayPackageRoutingModule
  ]
})
export class HolidayPackagesModule { }
