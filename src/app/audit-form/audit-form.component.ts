import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Vehicle} from '../models/vehicle';
import {VEHICLE_DATA} from '../models/constants/vehicles-data';
import {ActivatedRoute, Params} from '@angular/router';
import {AuditComposition, CompositionFormRow} from './audit-form.composition-form';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.component.html',
  styleUrls: ['./audit-form.component.css']
})
export class AuditFormComponent implements OnInit {
  auditFormGroup: FormGroup;
  auditFormData: CompositionFormRow[] = AuditComposition;
  Vehicles: Vehicle[] = VEHICLE_DATA;
  vehicle: Vehicle;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.auditFormGroup = new FormGroup({});
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id !== undefined) {
        const id: number = Number(params.id);
        this.vehicle = this.Vehicles.find(vehicle => vehicle.id === id);
      } else {
        this.vehicle = new Vehicle();
      }
    });
  }

  formInitialized(name: string, form: FormGroup) {
    this.auditFormGroup.setControl(name, form);
  }

}
