import {Component} from '@angular/core';
import {Label, DashboardLabel} from './dashboard.label';
import {Router} from '@angular/router';
import {VehicleService} from '../services/vehicle.service';
import * as _ from 'underscore';
import {Vehicle} from '../models/vehicle';
import {Audit} from '../models/audit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  label: DashboardLabel;
  vehicles: Vehicle[];

  constructor(private router: Router, private vehicleService: VehicleService) {
    this.vehicles = [];
    this.label = Label;
    this.vehicleService
      .getAllVehicle()
      .subscribe(
        audits => {
          console.log(audits);
          if (audits) {
            _.chain(audits)
              .groupBy((audit: Audit) => {
                return audit.plateNumber;
              })
              .mapObject((auditsByVeh: Audit[], key: string) => {
                const auditsByVehOrder = _.sortBy(auditsByVeh, (audit: Audit) => audit.auditDate).reverse();
                this.vehicles.push(new Vehicle(key, auditsByVehOrder));
              });
          }
        },
        error => console.error(error)
      );
  }

  viewVehicle(id?: string) {
    const url = id ? `newForm/${id}` : `newForm`;
    this.router
      .navigate([url])
      .then(
        () => {
        },
        error => console.error(error)
      );
  }
}
