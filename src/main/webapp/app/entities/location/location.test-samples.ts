import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 3274,
};

export const sampleWithPartialData: ILocation = {
  id: 1407,
  streetAddress: 'columnist decoration',
  postalCode: 'aw',
  city: 'Lynchstead',
  stateProvince: 'without now',
};

export const sampleWithFullData: ILocation = {
  id: 13315,
  streetAddress: 'gadzooks because avenue',
  postalCode: 'who accusation toward',
  city: 'Cleveland Heights',
  stateProvince: 'soft',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
