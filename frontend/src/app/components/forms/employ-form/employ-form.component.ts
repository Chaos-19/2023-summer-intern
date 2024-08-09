import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputType } from '../../../tpes';
import { ImageUploaderComponent } from '../../ui/image-uploader/image-uploader.component';

@Component({
  selector: 'app-employ-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,

    ImageUploaderComponent,
  ],
  templateUrl: './employ-form.component.html',
  styleUrl: './employ-form.component.css',
})
export class EmployFormComponent {
  empform: FormGroup;

  genders: InputType[] = [
    { value: 'male-0', viewValue: 'male' },
    { value: 'female-1', viewValue: 'female' },
  ];

  citizenships: InputType[] = [
    { value: 'ethiopian-0', viewValue: 'Ethiopian' },
    { value: 'kenyan-1', viewValue: 'Kenyan' },
  ];
  catagories: InputType[] = [
    { value: 'catagoryA-0', viewValue: 'catagory A' },
    { value: 'catagoryB-1', viewValue: 'catagory B' },
    { value: 'catagoryC-2', viewValue: 'catagory C' },
    { value: 'catagoryD-3', viewValue: 'catagory D' },
  ];
  statuses: InputType[] = [
    { value: 'working-0', viewValue: 'working' },
    { value: 'notworking-1', viewValue: 'notworking' },
    { value: 'suspened-2', viewValue: 'suspened' },
    { value: 'closed-3', viewValue: 'closed' },
  ];
  rigons: InputType[] = [
    { value: 'AddisAbaba-0', viewValue: 'AddisAbaba' },
    { value: 'Amhara-1', viewValue: 'Amhara' },
    { value: 'Oromia-2', viewValue: 'Oromia' },
    { value: 'Tigray-3', viewValue: 'Tigray' },
  ];
  cities: InputType[] = [
    { value: 'AddisAbaba-0', viewValue: 'AddisAbaba' },
    { value: 'Baherdar-1', viewValue: 'Baherdar' },
    { value: 'Debreziet-2', viewValue: 'Debreziet' },
    { value: 'Nazret-3', viewValue: 'Nazret' },
  ];
  woredas: InputType[] = [
    { value: 'Bole-0', viewValue: 'Bole' },
    { value: 'Yeka-1', viewValue: 'Yeka' },
    { value: 'NifasSilk-2', viewValue: 'NifasSilk' },
  ];

  kebeles: InputType[] = [
    { value: '01-0', viewValue: '01' },
    { value: '11-1', viewValue: '11' },
    { value: '12-2', viewValue: '12' },
    { value: '13-3', viewValue: '13' },
  ];

  taxpayertypes: InputType[] = [
    { value: 'Individual-0', viewValue: 'Individual' },
    { value: 'company-1', viewValue: 'company' },
  ];

  assesementtypes: InputType[] = [
    { value: 'hisamezgeb-0', viewValue: 'hisamezgeb' },
    { value: 'kurtGiber-1', viewValue: 'kurtGiber' },
  ];

  constructor(private _fb: FormBuilder) {
    this.empform = this._fb.group({
      taxpayertype: ['', Validators.required],
      tin: ['', Validators.required],
      foldernumber: ['', Validators.required],
      assesmenttype: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      fnenglish: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      citizen: ['', Validators.required],
      mothername: ['', Validators.required],
      mfname: ['', Validators.required],
      mgfname: ['', Validators.required],
      regdate: [''],
      catagory: ['', Validators.required],
      status: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      woreda: ['', Validators.required],
      kebele: ['', Validators.required],
    });
  }

  onFormSubsmit() {
    if (this.empform.valid) {
      console.log(this.empform.value);
    }
  }

  onRegionSelectionChange(event: MatSelectChange) {
    console.log(event.value); // This will log the value of the selected item.

    this.cities = Array.from({ length: 10 }).map((v) => ({
      value: event.value,
      viewValue: event.value,
    })) as InputType[];
    this.woredas = Array.from({ length: 10 }).map((v) => ({
      value: event.value,
      viewValue: event.value,
    })) as InputType[];
    this.kebeles = Array.from({ length: 10 }).map((v) => ({
      value: event.value,
      viewValue: event.value,
    })) as InputType[];
  }
}
