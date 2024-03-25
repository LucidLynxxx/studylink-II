import { Injectable } from '@angular/core';
import { Gender, MatchStatus, Student } from '../services/student.service';
import { Level } from '../services/subject.service';

@Injectable({
  providedIn: 'root'
})
export class StudentClientService {

  constructor() { }

  async getByFullName(firstName: string, lastName: string): Promise<Student> {
    const mockData: Student = {
      id: 745185,
      firstName: "Fabio",
      lastName: "Strumegger",
      eligibleAsStudent: [
        {
          id:501,
          name: "KSN1",
          level: Level.Fifth
        },
        {
          id:502,
          name: "DIC1",
          level: Level.Fifth
        },
      ],
      eligibleAsTeacher: [
        {
          id:501,
          name: "KSN1",
          level: Level.Fifth
        },
        {
          id:502,
          name: "DIC1",
          level: Level.Fifth
        },
        {
          id:503,
          name: "MTRS",
          level: Level.Fifth
        },
        {
          id:504,
          name: "HWE",
          level: Level.Fifth
        },
      ],
      requestedAsStudent: [
      ],
      requestedAsTeacher: [
      ],
      gender: Gender.Male,
      level: Level.Fifth,
      matches:[
        {
          id:101,
          teacherId: 745185,
          studentId: 745186,
          status: MatchStatus.Unresolved
        }
      ]
    }

    return Promise.resolve(mockData);
  }

  async getById(id: number): Promise<Student>{
    const mockData: Student = {
      id: 745186,
      firstName: "Max",
      lastName: "Mustermann",
      eligibleAsStudent: [],
      eligibleAsTeacher: [],
      requestedAsStudent: [],
      requestedAsTeacher: [],
      gender: Gender.Male,
      level: Level.Third,
      matches:[
        {
          id:101,
          teacherId: 745185,
          studentId: 745186,
          status: MatchStatus.TeacherAccepted
        }
      ]
    }
    
    return Promise.resolve(mockData);
  }
}
