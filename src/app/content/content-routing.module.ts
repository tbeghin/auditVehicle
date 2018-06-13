import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './content.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

export const ContentRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);