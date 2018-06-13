import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content.component';
import {MaterialModule} from '../material/material.module';
import {ContentRoutingModule} from './content-routing.module';
import {RouterModule} from '@angular/router';
import {DashboardModule} from '../dashboard/dashboard.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    DashboardModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
