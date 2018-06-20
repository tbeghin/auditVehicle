import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompositionForm} from '../audit-form.composition-form';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {
  @Input() item: CompositionForm;
  @Output() formReady: EventEmitter<FormGroup>;
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formReady = new EventEmitter<FormGroup>();
    this.itemForm = new FormGroup({});
  }

  ngOnInit() {
    this.itemForm.addControl(this.item.formControlName, this.formBuilder.control(''));
    this.formReady.emit(this.itemForm);
  }

}
