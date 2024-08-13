export interface Tile {
  color: string;
  cols: number;
  rows?: number;
  text: string;
}

export interface InputType {
  value: string;
  viewValue: string;
}

export interface TaxPayer {
  taxPayerId?:number;
  taxpayerType: 'individual' | 'company';
  tin: number;
  assesmentType: 'hisamezgeb' | 'kurtGiber';
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  citizen: string;
  registrationDate: Date;
  category: string;
  status: string;
  region: string;
  city: string;
  woreda: string;
  kebele: string;
}
