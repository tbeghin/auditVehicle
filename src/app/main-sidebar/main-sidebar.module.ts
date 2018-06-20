import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainSidebarComponent} from './main-sidebar.component';
import {MaterialModule} from '../material/material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [MainSidebarComponent],
  exports: [MainSidebarComponent]
})
export class MainSidebarModule {
}
