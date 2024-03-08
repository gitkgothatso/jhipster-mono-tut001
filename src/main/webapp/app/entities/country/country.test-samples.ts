import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 22984,
};

export const sampleWithPartialData: ICountry = {
  id: 2328,
};

export const sampleWithFullData: ICountry = {
  id: 3011,
  countryName: 'promptly',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
