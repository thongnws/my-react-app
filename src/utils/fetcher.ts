import { Legalguardian, School, Student } from './types';

async function fetcher<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  return fetch(input, init).then((r) => r.json());
}
export default fetcher;

export async function fetchStudentData(id: string) {
  return fetcher<Student>(`/students/${id}`);
}

export async function fetchSchoolData(id: string) {
  return fetcher<School>(`/schools/${id}`);
}

export async function fetchLegalguardiansData(id: string) {
  return fetcher<Legalguardian>(`/legalguardians/${id}`);
}
