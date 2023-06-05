import React from 'react';
import { Legalguardian, School, Student } from '../utils/types';
import { find } from 'lodash';

type StudentsTableProps = {
  studentsData: Student[];
  schoolsData: School[];
  legalguardiansData: Legalguardian[];
};

const StudentsTable: React.FC<StudentsTableProps> = ({
  studentsData,
  schoolsData,
  legalguardiansData,
}) => {
  console.log('rerender StudentsTable');
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Student name
            </th>
            <th scope="col" className="px-6 py-3">
              School name
            </th>
            <th scope="col" className="px-6 py-3">
              Legalguardian name
            </th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => {
            const school = find(schoolsData, { id: student.schoolId });
            const legalguardian = find(legalguardiansData, {
              id: student.legalguardianId,
            });
            return (
              <tr
                key={student.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{student.id}</td>
                <th scope="row" className="px-6 py-4 font-medium">
                  {student.name}
                </th>
                <td className="px-6 py-4">{school?.name}</td>
                <td className="px-6 py-4">{legalguardian?.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
