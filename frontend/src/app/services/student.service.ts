import { Injectable } from '@angular/core';
import { Level, Subject } from './subject.service';
import { StudentClientService } from '../clients/student-client.service';


export enum Gender {
  Female = 'weiblich',
  Male = 'männlich'
}

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  eligibleAsStudent: Subject[];
  eligibleAsTeacher: Subject[];
  requestedAsStudent: Subject[];  //change to use custom "Offering" objects
  requestedAsTeacher: Subject[];
  gender: Gender;
  level: Level;
  matches: Match[];
}

export enum MatchStatus {
  Unresolved = 'Neu',
  TeacherAccepted = 'vom Lehrer angenommen',
  StudentAccepted = 'vom Schüler angenommen',
  LockedIn = 'beidseitig angenommen',
  UnmatchedByStudent = 'Match von Schüler aufgelöst',
  UnmatchedByTeacher = 'Match von Lehrer aufgelöst'
}

export interface Match {
  id: number;
  teacherId: number;
  studentId: number;
  status: MatchStatus;
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private loggedInUser!: Student;


  constructor(
    private studentClient: StudentClientService
  ) { }
  
  async logIn(user: Student): Promise<void>{
    this.loggedInUser = user;
  }

  async getStudentByFullName(firstName: string, lastName:string): Promise<Student>{
    return this.studentClient.getByFullName(firstName, lastName);
  }

  async getStudentById(id: number){
    return this.studentClient.getById(id);
  }

}
