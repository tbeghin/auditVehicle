import {Component} from '@angular/core';
import {Label, DashboardLabel} from './dashboard.label';
import {Vehicle} from '../models/vehicle';
import {VEHICLE_DATA} from '../models/constants/vehicles-data';
import {StatusIcon} from '../models/status-icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  label: DashboardLabel = Label;
  Vehicles: Vehicle[] = VEHICLE_DATA;

  constructor(private router: Router) {
    this.Vehicles.forEach(vehicle => vehicle.statusControl = new StatusIcon(vehicle.statusControlNumber));
  }

  viewVehicle(id: number) {
    this.router.navigate([`newForm/${id}`]);
  }
}
