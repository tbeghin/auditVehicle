import {StatusIcon} from './status-icon';

export class Vehicle {
  id: number;
  immatriculation: string;
  controlDate: string;
  statusControlNumber: number;
  description: string;
  statusControl?: StatusIcon;
}
