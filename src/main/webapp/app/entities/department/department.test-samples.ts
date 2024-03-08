import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 7029,
  departmentName: 'below neatly',
};

export const sampleWithPartialData: IDepartment = {
  id: 28262,
  departmentName: 'than',
};

export const sampleWithFullData: IDepartment = {
  id: 5369,
  departmentName: 'loudly finally',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'because huzzah footnote',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
