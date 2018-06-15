import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content.component';
import {MaterialModule} from '../material/material.module';
import {ContentRoutingModule} from './content-routing.module';
import {RouterModule} from '@angular/router';
import {DashboardModule} from '../dashboard/dashboard.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuditFormModule} from '../audit-form/audit-form.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    DashboardModule,
    AuditFormModule
  ],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule {
}
