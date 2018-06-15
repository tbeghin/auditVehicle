import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditFormComponent } from './audit-form.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AuditFormComponent],
  exports: [AuditFormComponent]
})
export class AuditFormModule { }
