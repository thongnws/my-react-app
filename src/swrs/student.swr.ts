/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR, { SWRResponse } from 'swr';
import fetcher from '../utils/fetcher';
import { Student } from '../utils/types';

const ApiUrl = import.meta.env.API_URL;

export function useStudents(): SWRResponse<Student[], Error> {
  return useSWR<Student[]>(`/students`, fetcher);
}

export function useStudentId(id: string): SWRResponse<Student, Error> {
  return useSWR<Student>(`${ApiUrl}/students/${id}`, fetcher);
}
