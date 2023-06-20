import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { StayListComponent } from './components/stay-list/stay-list.component';
import { StayDetailsComponent } from './components/stay-details/stay-details.component';
import { TicketBookingComponent } from './components/ticket-booking/ticket-booking.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    FlightListComponent,
    FlightDetailsComponent,
    StayListComponent,
    StayDetailsComponent,
    TicketBookingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
