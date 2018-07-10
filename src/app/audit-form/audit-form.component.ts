import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Audit} from '../models/audit';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuditComposition, CompositionFormRow} from '../models/constants/audit-form.composition-form';
import {VehicleService} from '../services/vehicle.service';
import {BehaviorSubject} from 'rxjs/index';
import {HandleErrorService} from '../services/handle-error.service';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.component.html',
  styleUrls: ['./audit-form.component.css']
})
export class AuditFormComponent implements OnInit {
  auditFormGroup: FormGroup;
  auditFormData: CompositionFormRow[] = AuditComposition;
  idVehicle: string;
  vehicles: Audit[];

  vehicle: BehaviorSubject<Audit> = new BehaviorSubject(new Audit());

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private handleErrorService: HandleErrorService
  ) {
    this.auditFormGroup = new FormGroup({});
    this.vehicleService.getAllVehicle().subscribe(
      (vehicles: Audit[]) => {
        this.vehicles = vehicles;
        this.editVehicle();
      },
      error => console.log(error));
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.id !== undefined) {
          this.idVehicle = params.id;
          this.editVehicle();
        } else {
          this.vehicle.next(new Audit());
        }
      });
  }

  editVehicle() {
    if (this.idVehicle && this.vehicles) {
      const vehicleFind = this.vehicles.find(vehicle => vehicle._id === this.idVehicle);
      this.vehicle.next(vehicleFind);
    }
  }

  formInitialized(name: string, form: FormControl) {
    this.auditFormGroup.setControl(name, form);
  }

  onSubmit() {
    const newVehicle = new Audit(this.auditFormGroup, this.idVehicle);
    if (this.idVehicle) {
      this.vehicleService.putVehicle(newVehicle).subscribe(
        () => this.router.navigate([`dashboard`]),
        this.handleErrorService.error
      );
    } else {
      this.vehicleService.postVehicle(newVehicle).subscribe(
        () => this.router.navigate([`dashboard`]),
        this.handleErrorService.error
      );
    }
  }
}
