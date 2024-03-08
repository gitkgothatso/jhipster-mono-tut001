import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 903,
};

export const sampleWithPartialData: IJob = {
  id: 31972,
  jobTitle: 'Central Accountability Engineer',
  maxSalary: 4862,
};

export const sampleWithFullData: IJob = {
  id: 18609,
  jobTitle: 'Investor Program Developer',
  minSalary: 20792,
  maxSalary: 2238,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
