import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompositionForm} from '../../models/constants/audit-form.composition-form';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Audit} from '../../models/audit';
import {BehaviorSubject} from 'rxjs/index';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  @Input() item: CompositionForm;
  @Input() vehicle: BehaviorSubject<Audit>;
  @Output() formReady: EventEmitter<FormControl>;
  itemForm: FormGroup;
  itemControl: FormControl;

  constructor(private formBuilder: FormBuilder) {
    this.itemForm = new FormGroup({});
    this.formReady = new EventEmitter<FormControl>();
    this.itemControl = this.formBuilder.control('');
  }

  ngOnInit() {
    const pathVehicle = this.item.pathValue.split('.');
    this.vehicle.subscribe(vehicle => {
      if (vehicle._id) {
        pathVehicle.forEach(path => vehicle = vehicle[path]);
        this.itemControl.setValue(vehicle);
      }
    });
    this.itemForm.addControl(this.item.formControlName, this.itemControl);
    this.formReady.emit(this.itemControl);
  }

}
