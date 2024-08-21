import { InputType } from './tpes';

export const regions: {
  [key: string]: {
    cities: InputType[];
    woredas: InputType[];
    kebeles: InputType[];
  };
} = {
  addisAbaba: {
    cities: [{ value: 'AddisAbaba', viewValue: 'Addis Ababa' }],
    woredas: [
      { value: 'Bole', viewValue: 'Bole' },
      { value: 'Yeka', viewValue: 'Yeka' },
      { value: 'NifasSilkLafto', viewValue: 'Nifas Silk Lafto' },
      { value: 'Kirkos', viewValue: 'Kirkos' },
      { value: 'Arada', viewValue: 'Arada' },
    ],
    kebeles: [
      { value: '01', viewValue: 'Kebele 01' },
      { value: '02', viewValue: 'Kebele 02' },
      { value: '03', viewValue: 'Kebele 03' },
      { value: '04', viewValue: 'Kebele 04' },
      { value: '05', viewValue: 'Kebele 05' },
    ],
  },
  amhara: {
    cities: [
      { value: 'Bahirdar', viewValue: 'Bahirdar' },
      { value: 'Gondar', viewValue: 'Gondar' },
      { value: 'DebreMarkos', viewValue: 'Debre Markos' },
    ],
    woredas: [
      { value: 'BahirDarZuria', viewValue: 'Bahir Dar Zuria' },
      { value: 'Dembiya', viewValue: 'Dembiya' },
      { value: 'Debark', viewValue: 'Debark' },
      { value: 'DebreElias', viewValue: 'Debre Elias' },
    ],
    kebeles: [
      { value: 'Kebele01', viewValue: 'Kebele 01' },
      { value: 'Kebele02', viewValue: 'Kebele 02' },
      { value: 'Kebele03', viewValue: 'Kebele 03' },
      { value: 'Kebele04', viewValue: 'Kebele 04' },
    ],
  },
  oromia: {
    cities: [
      { value: 'Adama', viewValue: 'Adama' },
      { value: 'Bishoftu', viewValue: 'Bishoftu' },
      { value: 'Jimma', viewValue: 'Jimma' },
      { value: 'Shashamane', viewValue: 'Shashamane' },
    ],
    woredas: [
      { value: 'Ginci', viewValue: 'Ginci' },
      { value: 'Ambo', viewValue: 'Ambo' },
      { value: 'AdamaRural', viewValue: 'Adama Rural' },
      { value: 'BishoftuRural', viewValue: 'Bishoftu Rural' },
    ],
    kebeles: [
      { value: 'Kebele01', viewValue: 'Kebele 01' },
      { value: 'Kebele02', viewValue: 'Kebele 02' },
      { value: 'Kebele03', viewValue: 'Kebele 03' },
      { value: 'Kebele04', viewValue: 'Kebele 04' },
    ],
  },
  tigray: {
    cities: [
      { value: 'Mekelle', viewValue: 'Mekelle' },
      { value: 'Adigrat', viewValue: 'Adigrat' },
      { value: 'Axum', viewValue: 'Axum' },
      { value: 'Shire', viewValue: 'Shire' },
    ],
    woredas: [
      { value: 'Enderta', viewValue: 'Enderta' },
      { value: 'KilteAwulaelo', viewValue: 'Kilte Awulaelo' },
      { value: 'Adwa', viewValue: 'Adwa' },
      { value: 'ShireIndasilase', viewValue: 'Shire Indasilase' },
    ],
    kebeles: [
      { value: 'Kebele01', viewValue: 'Kebele 01' },
      { value: 'Kebele02', viewValue: 'Kebele 02' },
      { value: 'Kebele03', viewValue: 'Kebele 03' },
      { value: 'Kebele04', viewValue: 'Kebele 04' },
    ],
  },
  snnpr: {
    cities: [
      { value: 'Hawassa', viewValue: 'Hawassa' },
      { value: 'WolayitaSodo', viewValue: 'Wolayita Sodo' },
      { value: 'ArbaMinch', viewValue: 'Arba Minch' },
      { value: 'Hosaena', viewValue: 'Hosaena' },
    ],
    woredas: [
      { value: 'Sidama', viewValue: 'Sidama' },
      { value: 'Gamo', viewValue: 'Gamo' },
      { value: 'Wolayita', viewValue: 'Wolayita' },
      { value: 'Gedeo', viewValue: 'Gedeo' },
    ],
    kebeles: [
      { value: 'Kebele01', viewValue: 'Kebele 01' },
      { value: 'Kebele02', viewValue: 'Kebele 02' },
      { value: 'Kebele03', viewValue: 'Kebele 03' },
      { value: 'Kebele04', viewValue: 'Kebele 04' },
    ],
  },
  somali: {
    cities: [
      { value: 'Jigjiga', viewValue: 'Jigjiga' },
      { value: 'Degehabur', viewValue: 'Degehabur' },
      { value: 'Gode', viewValue: 'Gode' },
      { value: 'KebriDehar', viewValue: 'Kebri Dehar' },
    ],
    woredas: [
      { value: 'Shinile', viewValue: 'Shinile' },
      { value: 'Afdem', viewValue: 'Afdem' },
      { value: 'Fik', viewValue: 'Fik' },
      { value: 'Gode', viewValue: 'Gode' },
    ],
    kebeles: [
      { value: 'Kebele01', viewValue: 'Kebele 01' },
      { value: 'Kebele02', viewValue: 'Kebele 02' },
      { value: 'Kebele03', viewValue: 'Kebele 03' },
      { value: 'Kebele04', viewValue: 'Kebele 04' },
    ],
  },
};
