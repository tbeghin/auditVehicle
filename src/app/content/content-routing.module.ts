import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './content.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuditFormComponent} from '../audit-form/audit-form.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'newForm', component: AuditFormComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

export const ContentRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
