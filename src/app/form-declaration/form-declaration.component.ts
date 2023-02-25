import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-declaration',
  templateUrl: './form-declaration.component.html',
  styleUrls: ['./form-declaration.component.scss'],
})
export class FormDeclarationComponent {
  formDeclaration = new FormGroup({
    date: new FormControl(new Date(), Validators.required),
    station: new FormControl('', Validators.required),
    trainNumber: new FormControl(''),
    problem: new FormControl('', Validators.required),
    comment: new FormControl(''),
  });

  constructor() {}

  onSubmit() {
    console.log(this.formDeclaration.value);
  }
}
