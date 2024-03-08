import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 8488,
};

export const sampleWithPartialData: IRegion = {
  id: 26324,
  regionName: 'eek',
};

export const sampleWithFullData: IRegion = {
  id: 5002,
  regionName: 'fowl querulous before',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
