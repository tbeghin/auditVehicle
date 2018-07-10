import {Audit} from './audit';
import {StatusIcon} from './status-icon';

export class Vehicle {
  _id: string;
  plateNumber: string;
  dateLastAudit: Date;
  statusControl?: StatusIcon;
  historyAudit: Audit[];

  constructor(plateNumber: string, audits: Audit[]) {
    this._id = audits[0]._id;
    this.plateNumber = plateNumber;
    this.historyAudit = audits;
    this.dateLastAudit = audits[0].auditDate;
    this.statusControl = audits[0].statusControl;
  }
}
