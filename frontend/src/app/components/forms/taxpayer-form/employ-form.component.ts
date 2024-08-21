import { Component, inject, signal } from '@angular/core';
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
import { InputType, TaxPayer } from '../../../tpes';
import { ImageUploaderComponent } from '../../ui/image-uploader/image-uploader.component';
import { TaxpayerService } from '../../../core/services/tax-payer.service';

import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';
import { customAlphabet } from 'nanoid';
import { regions } from '../../../constant';

// Define a custom alphabet (only numbers)
const nanoid = customAlphabet('0123456789', 10); // 10 is the length of the ID

const RELOAD_ICON =
  `
 <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

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
    MatButtonToggleModule,
    MatIconModule,
  ],
  templateUrl: './employ-form.component.html',
  styleUrl: './employ-form.component.css',
})
export class EmployFormComponent {
  empform: FormGroup;
  taxPayerservice = inject(TaxpayerService);
  currentTaxPayerInfo!: TaxPayer;

  gender: InputType[] = [
    { value: 'male', viewValue: 'male' },
    { value: 'female', viewValue: 'female' },
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
    { value: 'addisAbaba', viewValue: 'AddisAbaba' },
    { value: 'amhara', viewValue: 'Amhara' },
    { value: 'oromia', viewValue: 'Oromia' },
    { value: 'tigray', viewValue: 'Tigray' },
    { value: 'snnpr', viewValue: 'SNNP' },
    { value: 'somali', viewValue: 'Somali' },
  ];
  cities: InputType[] = [...regions['addisAbaba'].cities];
  woredas: InputType[] = [...regions['addisAbaba'].woredas];
  kebeles: InputType[] = [...regions['addisAbaba'].kebeles];

  taxpayertypes: InputType[] = [
    { value: 'individual', viewValue: 'Individual' },
    { value: 'company', viewValue: 'company' },
  ];

  assesementtypes: InputType[] = [
    { value: 'hisamezgeb-0', viewValue: 'hisamezgeb' },
    { value: 'kurtGiber-1', viewValue: 'kurtGiber' },
  ];

  constructor(private _fb: FormBuilder) {
    this.empform = this._fb.group({
      taxpayerType: ['', Validators.required],
      tin: ['', Validators.required],
      assesmentType: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      citizen: ['', Validators.required],
      registrationDate: [''],
      category: ['', Validators.required],
      status: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      woreda: ['', Validators.required],
      kebele: ['', Validators.required],
    });

    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral(
      'generate',
      sanitizer.bypassSecurityTrustHtml(RELOAD_ICON)
    );
  }

  onFormSubsmit() {
    console.log(this.empform.value);
    if (this.empform.valid) {
      console.log(this.empform.value);
      this.currentTaxPayerInfo = this.empform.value;
      this.taxPayerservice.createTaxpayer(this.empform.value).subscribe({
        next: (value) => {
          console.log(value);
          this.currentTaxPayerInfo = value;
        },
        error: (err: any) => console.error('errror', err),
        complete: () => console.log('NEW TaxPa completed'),
      });
    }
  }

  onRegionSelectionChange(event: MatSelectChange) {
    console.log(event.value); // This will log the value of the selected item.

    this.cities = regions[event.value].cities as InputType[];
    this.woredas = regions[event.value].woredas as InputType[];
    this.kebeles = regions[event.value].kebeles as InputType[];
  }

  generateTIN() {
    const uniqueId = nanoid();

    this.empform.patchValue({
      tin: Number(uniqueId),
    });
  }

  searchTaxPayer() {
    const tinNo = this.empform.get('tin')?.value;
    this.taxPayerservice.GetTaxPayer(tinNo).subscribe({
      next: (resp) => {
        this.empform.patchValue({
          ...resp,
        });
        this.currentTaxPayerInfo = resp;
      },
      error: (error) => console.log(error),
      complete: () => console.log('request completed'),
    });
    console.log(tinNo);
  }

  deleteTaxPayer() {
    const tinNo = this.empform.get('tin')?.value;

    this.taxPayerservice.DeleteTaxpayer(tinNo).subscribe({
      next: (resp) => {
        console.log(resp);

        //this.empform.reset();
      },
      error: (error) => console.log(error),
      complete: () => console.log('request completed'),
    });
  }
  updateTaxPayer() {
    const tinNo = this.empform.get('tin')?.value;

    this.taxPayerservice
      .UpdateTaxpayer(tinNo, {
        ...this.currentTaxPayerInfo,
        ...this.empform.value,
      })
      .subscribe({
        next: (resp) => {
          alert(resp);
        },
        error: (error) => console.log(error),
        complete: () => console.log('request completed'),
      });
  }
}
