import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 14589,
};

export const sampleWithPartialData: IEmployee = {
  id: 3073,
  firstName: 'Anya',
  lastName: 'Cremin',
  phoneNumber: 'until disastrous psst',
  salary: 13127,
};

export const sampleWithFullData: IEmployee = {
  id: 11312,
  firstName: 'Kayli',
  lastName: 'Hirthe',
  email: 'Amya.Schulist@hotmail.com',
  phoneNumber: 'aha extraneous',
  hireDate: dayjs('2024-03-08T00:09'),
  salary: 19831,
  commissionPct: 26132,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
