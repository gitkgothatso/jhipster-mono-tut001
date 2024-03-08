import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 12388,
};

export const sampleWithPartialData: ITask = {
  id: 11287,
  description: 'untangle',
};

export const sampleWithFullData: ITask = {
  id: 27653,
  title: 'phooey visualise near',
  description: 'gosh unripe',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
