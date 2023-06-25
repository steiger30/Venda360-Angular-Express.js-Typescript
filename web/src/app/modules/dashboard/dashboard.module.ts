import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DashboardComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
