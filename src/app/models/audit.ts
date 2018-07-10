import {StatusIcon} from './status-icon';
import {FormGroup} from '@angular/forms';
import {RadioCommentForm} from './radio-comment-form';

export class Audit {
  _id: string;
  plateNumber: string;
  statusControlNumber: number = this.getStatusControlNumber(this);
  statusControl?: StatusIcon = new StatusIcon(this.statusControlNumber);
  agency: string;
  subAgency: string;
  site: string;
  driver: string;
  inspector: string;
  auditDate: Date;
  distance: number;
  cleanliness: RadioCommentForm;
  bodyState: RadioCommentForm;
  arrangement: RadioCommentForm;
  pneumaticState: RadioCommentForm;
  lighting: RadioCommentForm;
  wingMirror: RadioCommentForm;
  windscreenWipers: RadioCommentForm;
  windshield: RadioCommentForm;
  insurance: RadioCommentForm;
  report: RadioCommentForm;
  logo: RadioCommentForm;
  vehiclePapers: RadioCommentForm;
  vehicleBook: RadioCommentForm;
  technicalRevision: RadioCommentForm;
  lastCtTheoDate: Date;
  lastCtReaDate: Date;
  sticker: RadioCommentForm;
  license: RadioCommentForm;
  loadingVehicle: RadioCommentForm;
  tools: RadioCommentForm;
  spareWheel: RadioCommentForm;
  cric: RadioCommentForm;
  crank: RadioCommentForm;
  securityAccessory: RadioCommentForm;
  extinguisher: RadioCommentForm;
  aidKit: RadioCommentForm;
  shocksOrStripes: string;
  observations: string;

  constructor(auditFormGroup?: FormGroup, id?: string) {
    if (auditFormGroup) {
      this._id = id;
      this.agency = auditFormGroup.controls.formInputAgency.value;
      this.subAgency = auditFormGroup.controls.formInputSubAgency.value;
      this.site = auditFormGroup.controls.formInputSite.value;
      this.driver = auditFormGroup.controls.formInputDriver.value;
      this.inspector = auditFormGroup.controls.formInputControler.value;
      this.auditDate = auditFormGroup.controls.formInputAuditDate.value;
      this.distance = auditFormGroup.controls.formInputDistance.value;
      this.plateNumber = auditFormGroup.controls.formInputPlateNumber.value;
      this.cleanliness = new RadioCommentForm(
        auditFormGroup.controls.formRadioCleanliness.value,
        auditFormGroup.controls.formInputCleanliness.value);
      this.bodyState = new RadioCommentForm(
        auditFormGroup.controls.formRadioBodyState.value,
        auditFormGroup.controls.formInputBodyState.value);
      this.arrangement = new RadioCommentForm(
        auditFormGroup.controls.formRadioArrangement.value,
        auditFormGroup.controls.formInputArrangement.value);
      this.pneumaticState = new RadioCommentForm(
        auditFormGroup.controls.formRadioPneumaticState.value,
        auditFormGroup.controls.formInputPneumaticState.value);
      this.lighting = new RadioCommentForm(
        auditFormGroup.controls.formRadioLighting.value,
        auditFormGroup.controls.formInputLighting.value);
      this.wingMirror = new RadioCommentForm(
        auditFormGroup.controls.formRadioWingMirror.value,
        auditFormGroup.controls.formInputWingMirror.value);
      this.windscreenWipers = new RadioCommentForm(
        auditFormGroup.controls.formRadioWindscreenWipers.value,
        auditFormGroup.controls.formInputWindscreenWipers.value);
      this.windshield = new RadioCommentForm(
        auditFormGroup.controls.formRadioWindshield.value,
        auditFormGroup.controls.formInputWindshield.value);
      this.insurance = new RadioCommentForm(
        auditFormGroup.controls.formRadioInsurance.value,
        auditFormGroup.controls.formInputInsurance.value);
      this.report = new RadioCommentForm(
        auditFormGroup.controls.formRadioReport.value,
        auditFormGroup.controls.formInputReport.value);
      this.logo = new RadioCommentForm(
        auditFormGroup.controls.formRadioLogo.value,
        auditFormGroup.controls.formInputLogo.value);
      this.vehiclePapers = new RadioCommentForm(
        auditFormGroup.controls.formRadioVehiclePapers.value,
        auditFormGroup.controls.formInputVehiclePapers.value);
      this.vehicleBook = new RadioCommentForm(
        auditFormGroup.controls.formRadioVehicleBook.value,
        auditFormGroup.controls.formInputVehicleBook.value);
      this.technicalRevision = new RadioCommentForm(
        auditFormGroup.controls.formRadioTechnicalRevision.value,
        auditFormGroup.controls.formInputTechnicalRevision.value);
      this.lastCtTheoDate = auditFormGroup.controls.formDateLastCtTheo.value;
      this.lastCtReaDate = auditFormGroup.controls.formDateLastCtRea.value;
      this.sticker = new RadioCommentForm(
        auditFormGroup.controls.formRadioSticker.value,
        auditFormGroup.controls.formInputSticker.value);
      this.license = new RadioCommentForm(
        auditFormGroup.controls.formRadioLicense.value,
        auditFormGroup.controls.formInputLicense.value);
      this.loadingVehicle = new RadioCommentForm(
        auditFormGroup.controls.formRadioLoadingVehicle.value,
        auditFormGroup.controls.formInputLoading.value);
      this.tools = new RadioCommentForm(
        auditFormGroup.controls.formRadioTools.value,
        auditFormGroup.controls.formDateToolsDate.value);
      this.spareWheel = new RadioCommentForm(
        auditFormGroup.controls.formRadioSpareWheel.value,
        auditFormGroup.controls.formDateSpareWheelDate.value);
      this.cric = new RadioCommentForm(
        auditFormGroup.controls.formRadioCric.value,
        auditFormGroup.controls.formDateCricDate.value);
      this.crank = new RadioCommentForm(
        auditFormGroup.controls.formRadioCrank.value,
        auditFormGroup.controls.formDateCrankDate.value);
      this.securityAccessory = new RadioCommentForm(
        auditFormGroup.controls.formRadioSecurityAccessory.value,
        auditFormGroup.controls.formDateSecurityAccessoryDate.value);
      this.extinguisher = new RadioCommentForm(
        auditFormGroup.controls.formRadioExtinguisher.value,
        auditFormGroup.controls.formInputExtinguisher.value);
      this.aidKit = new RadioCommentForm(
        auditFormGroup.controls.formRadioAidKit.value,
        auditFormGroup.controls.formInputAidKit.value);
      this.shocksOrStripes = auditFormGroup.controls.formInputshocksOrStripes.value;
      this.observations = auditFormGroup.controls.formInputObservations.value;
      this.statusControlNumber = this.getStatusControlNumber(this);
      this.statusControl = new StatusIcon(this.statusControlNumber);
    }
  }

  getStatusControlNumber(vehicle: Audit): number {
    let result = 0;
    let total = 0;
    let statusNumber = 3;
    Object.keys(vehicle).forEach(property => {
      if (vehicle[property] instanceof RadioCommentForm) {
        total++;
        if (vehicle[property].value) {
          result++;
        }
      }
    });
    const percent = total ? result / total : 0;
    if (percent >= 0.95) {
      statusNumber = 1;
    } else if (percent >= 0.75) {
      statusNumber = 2;
    } else {
      statusNumber = 3;
    }
    return statusNumber;
  }
}
