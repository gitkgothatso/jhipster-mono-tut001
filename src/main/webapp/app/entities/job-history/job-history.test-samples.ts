import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 23124,
};

export const sampleWithPartialData: IJobHistory = {
  id: 9333,
  startDate: dayjs('2024-03-07T22:41'),
  endDate: dayjs('2024-03-07T21:00'),
};

export const sampleWithFullData: IJobHistory = {
  id: 1391,
  startDate: dayjs('2024-03-07T23:20'),
  endDate: dayjs('2024-03-07T13:31'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
