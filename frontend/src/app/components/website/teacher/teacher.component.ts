import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from 'src/app/services/student.service';
import { Subject } from 'src/app/services/subject.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit{
  displayedStudent!: Student;
  protected eligibleSubjects = [] as Subject[];
  protected requestedSubjects = [] as Subject[];

  selectedSubjectId: string = '';

  constructor(
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudentByFullName("Fabio", "Strumegger")
      .then((result: Student | undefined) => {
        if(result){   //if a student was returned
          this.displayedStudent = result;
          this.eligibleSubjects = this.displayedStudent.eligibleAsTeacher;
          this.requestedSubjects = this.displayedStudent.requestedAsTeacher;
          console.log(this.displayedStudent);
        } else {
          //returned undefined
        }
      });
    console.log(this.displayedStudent);
  }

  onClick(): void {
    console.log('Nachhilfe beantragt in ' + this.selectedSubjectId + ' warten auf match...')
    const requestedSubject: Subject = this.eligibleSubjects.find(
      (subj)=> subj.id.toString() == this.selectedSubjectId)!; //! necessary; this should always find a value
    console.log(requestedSubject);
      this.requestedSubjects.push(requestedSubject);
    this.eligibleSubjects = this.eligibleSubjects.filter(
      (element)=> element !== requestedSubject);
    console.log(this.requestedSubjects.length);
    //reset select tag
    //button soit a nu wos mochn
    this.selectedSubjectId = ''
  }
  cancelRequest(subjectId: number): void{
    const subjectToCancel: Subject = this.requestedSubjects.find(
      (subj) => subj.id == subjectId)!;
    this.eligibleSubjects.push(subjectToCancel);
    this.requestedSubjects = this.requestedSubjects.filter(
      (element) => element !== subjectToCancel);
  }
}
