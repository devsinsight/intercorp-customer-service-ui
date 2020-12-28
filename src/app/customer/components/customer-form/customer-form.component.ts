import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup = this.fb.group({});
  firstName = "";
  lastName = "";
  age = "";
  birthdate = "";
  submitted = false;
  minDate = "1920-01-01";
  maxDate = "2020-01-01";

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [this.firstName, [Validators.required, Validators.maxLength(25)]],
      lastName: [this.lastName, [Validators.required, Validators.maxLength(25)]],
      age: [this.age, [Validators.required, Validators.maxLength(2)]],
      birthdate: [this.birthdate, [Validators.required]]
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
