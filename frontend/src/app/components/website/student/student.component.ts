import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from 'src/app/services/student.service';
import { Level, Subject } from 'src/app/services/subject.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{
  displayedStudent!: Student;
  
  protected eligibleSubjects = [] as Subject[];
  protected requestedSubjects = [] as Subject[];

  selectedSubjectId: null = null;
  selectedSubjectName: String = '';
  selectedSubjectTeacher: String = '';
  levels: Subject[] = [];

  constructor(
    private studentService: StudentService
  ) {
    this.levels = this.enumToArray(Level);
  }

  ngOnInit(): void {
    this.studentService.getStudentByFullName("Fabio", "Strumegger")
      .then((result: Student | undefined) => {
        if(result){   //if a student was returned
          this.displayedStudent = result;
          this.eligibleSubjects = this.displayedStudent.eligibleAsStudent;
          this.requestedSubjects = this.displayedStudent.requestedAsStudent;
          console.log(this.displayedStudent);
        } else {
          //returned undefined
        }
      });
    console.log(this.displayedStudent);
  }

  onClick(): void {
    console.log('Nachhilfe beantragt in ' + this.selectedSubjectId + ' ' + this.selectedSubjectName + '. Warten auf match...')
    const requestedSubject: Subject = this.eligibleSubjects.find(
      (subj)=> subj.id.toString() == this.selectedSubjectId)!; //! necessary; this should always find a value
    console.log(requestedSubject);
      this.requestedSubjects.push(requestedSubject);
    this.eligibleSubjects = this.eligibleSubjects.filter(
      (element)=> element !== requestedSubject);
    console.log(this.requestedSubjects.length);
    //reset select tag
    //button should do something
    this.selectedSubjectName = ''
  }
//muss geändert werden
  cancelRequest(subjectId: number): void{
    const subjectToCancel: Subject = this.requestedSubjects.find(
      (subj) => subj.id == subjectId)!;
    this.eligibleSubjects.push(subjectToCancel);
    this.requestedSubjects = this.requestedSubjects.filter(
      (element) => element !== subjectToCancel);
  }

  enumToArray(enumVar: any): any[] {  //convert enum to array
    return Object.keys(enumVar).filter(key => !isNaN(Number(enumVar[key]))).map(key => ({
      id: enumVar[key],
      level: key
    }));
  }
}
