import { useState } from 'react';
import StudentsPicker from './StudentsPicker';
import StudentsTable from './StudentsTable';
import {
  fetchLegalguardiansData,
  fetchSchoolData,
  fetchStudentData,
} from '../utils/fetcher';
import { find } from 'lodash';
import { Legalguardian, School, Student } from '../utils/types';

function StudentDataComponent() {
  const [studentsData, setStudentsData] = useState<Student[]>([]);
  const [schoolsData, setSchoolsData] = useState<School[]>([]);
  const [legalguardiansData, setLegalguardiansData] = useState<Legalguardian[]>(
    [],
  );

  const onStudentsPick = async (studentIds: string[]) => {
    Promise.all(studentIds.map(fetchStudentData))
      .then(async (dataStudents) => {
        const dataSchools = await Promise.all(
          dataStudents
            .filter((item) => !find(schoolsData, { id: item.schoolId }))
            .map((item) => fetchSchoolData(item.schoolId)),
        );
        const dataLegalguardians = await Promise.all(
          dataStudents
            .filter(
              (item) => !find(legalguardiansData, { id: item.legalguardianId }),
            )
            .map((item) => fetchLegalguardiansData(item.legalguardianId)),
        );

        return {
          dataStudents,
          dataSchools,
          dataLegalguardians,
        };
      })
      .then(({ dataStudents, dataSchools, dataLegalguardians }) => {
        setStudentsData([...studentsData, ...dataStudents]);
        setSchoolsData([...schoolsData, ...dataSchools]);
        setLegalguardiansData([...legalguardiansData, ...dataLegalguardians]);
      });
  };

  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
        schoolsData={schoolsData}
        legalguardiansData={legalguardiansData}
      />
    </>
  );
}

export default StudentDataComponent;
