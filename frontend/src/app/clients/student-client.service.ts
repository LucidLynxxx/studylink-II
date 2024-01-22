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
        {
          id:503,
          name: "AM",
          level: Level.Fifth
        },
        {
          id:504,
          name: "D",
          level: Level.Fifth
        },
        {
          id:505,
          name: "E1",
          level: Level.Fifth
        },
        {
          id:506,
          name: "FSST",
          level: Level.Fifth
        },
        {
          id:507,
          name: "WIR_2",
          level: Level.Fifth
        },
        {
          id:508,
          name: "WIR_3",
          level: Level.Fifth
        },
        {
          id:509,
          name: "MTRS",
          level: Level.Fifth
        },
        {
          id:5010,
          name: "DIC",
          level: Level.Fifth
        },
        {
          id:5011,
          name: "HWE1",
          level: Level.Fifth
        },
        {
          id:5012,
          name: "BESP",
          level: Level.Fifth
        },
        {
          id:5013,
          name: "LA1",
          level: Level.Fifth
        },
        {
          id:5014,
          name: "PBE_3",
          level: Level.Fifth
        },
        {
          id:5015,
          name: "KPT",
          level: Level.Fifth
        },
        {
          id:5016,
          name: "RK",
          level: Level.Fifth
        }
      ],
      eligibleAsTeacher: [
        {
          id:101,
          name: "KSN1",
          level: Level.First
        },
        {
          id:102,
          name: "DIC1",
          level: Level.First
        },
        {
          id:103,
          name: "AM",
          level: Level.First
        },
        {
          id:104,
          name: "D",
          level: Level.First
        },
        {
          id:105,
          name: "E1",
          level: Level.First
        },
        {
          id:106,
          name: "FSST",
          level: Level.First
        },
        {
          id:107,
          name: "WIR_2",
          level: Level.First
        },
        {
          id:108,
          name: "WIR_3",
          level: Level.First
        },
        {
          id:109,
          name: "MTRS",
          level: Level.First
        },
        {
          id:1010,
          name: "DIC",
          level: Level.First
        },
        {
          id:1011,
          name: "HWE1",
          level: Level.First
        },
        {
          id:1012,
          name: "BESP",
          level: Level.First
        },
        {
          id:1013,
          name: "LA1",
          level: Level.First
        },
        {
          id:1014,
          name: "PBE_3",
          level: Level.First
        },
        {
          id:1015,
          name: "KPT",
          level: Level.First
        },
        {
          id:1016,
          name: "RK",
          level: Level.First
        },
                {
          id:201,
          name: "KSN1",
          level: Level.Second
        },
        {
          id:202,
          name: "DIC1",
          level: Level.Second
        },
        {
          id:203,
          name: "AM",
          level: Level.Second
        },
        {
          id:204,
          name: "D",
          level: Level.Second
        },
        {
          id:205,
          name: "E1",
          level: Level.Second
        },
        {
          id:206,
          name: "FSST",
          level: Level.Second
        },
        {
          id:207,
          name: "WIR_2",
          level: Level.Second
        },
        {
          id:208,
          name: "WIR_3",
          level: Level.Second
        },
        {
          id:209,
          name: "MTRS",
          level: Level.Second
        },
        {
          id:2010,
          name: "DIC",
          level: Level.Second
        },
        {
          id:2011,
          name: "HWE1",
          level: Level.Second
        },
        {
          id:2012,
          name: "BESP",
          level: Level.Second
        },
        {
          id:2013,
          name: "LA1",
          level: Level.Second
        },
        {
          id:2014,
          name: "PBE_3",
          level: Level.Second
        },
        {
          id:2015,
          name: "KPT",
          level: Level.Second
        },
        {
          id:2016,
          name: "RK",
          level: Level.Second
        },
                {
          id:301,
          name: "KSN1",
          level: Level.Third
        },
        {
          id:302,
          name: "DIC1",
          level: Level.Third
        },
        {
          id:303,
          name: "AM",
          level: Level.Third
        },
        {
          id:304,
          name: "D",
          level: Level.Third
        },
        {
          id:305,
          name: "E1",
          level: Level.Third
        },
        {
          id:306,
          name: "FSST",
          level: Level.Third
        },
        {
          id:307,
          name: "WIR_2",
          level: Level.Third
        },
        {
          id:308,
          name: "WIR_3",
          level: Level.Third
        },
        {
          id:309,
          name: "MTRS",
          level: Level.Third
        },
        {
          id:3010,
          name: "DIC",
          level: Level.Third
        },
        {
          id:3011,
          name: "HWE1",
          level: Level.Third
        },
        {
          id:3012,
          name: "BESP",
          level: Level.Third
        },
        {
          id:3013,
          name: "LA1",
          level: Level.Third
        },
        {
          id:3014,
          name: "PBE_3",
          level: Level.Third
        },
        {
          id:3015,
          name: "KPT",
          level: Level.Third
        },
        {
          id:3016,
          name: "RK",
          level: Level.Third
        },        {
          id:401,
          name: "KSN1",
          level: Level.Fourth
        },
        {
          id:402,
          name: "DIC1",
          level: Level.Fourth
        },
        {
          id:403,
          name: "AM",
          level: Level.Fourth
        },
        {
          id:404,
          name: "D",
          level: Level.Fourth
        },
        {
          id:405,
          name: "E1",
          level: Level.Fourth
        },
        {
          id:406,
          name: "FSST",
          level: Level.Fourth
        },
        {
          id:407,
          name: "WIR_2",
          level: Level.Fourth
        },
        {
          id:408,
          name: "WIR_3",
          level: Level.Fourth
        },
        {
          id:409,
          name: "MTRS",
          level: Level.Fourth
        },
        {
          id:4010,
          name: "DIC",
          level: Level.Fourth
        },
        {
          id:4011,
          name: "HWE1",
          level: Level.Fourth
        },
        {
          id:4012,
          name: "BESP",
          level: Level.Fourth
        },
        {
          id:4013,
          name: "LA1",
          level: Level.Fourth
        },
        {
          id:4014,
          name: "PBE_3",
          level: Level.Fourth
        },
        {
          id:4015,
          name: "KPT",
          level: Level.Fourth
        },
        {
          id:4016,
          name: "RK",
          level: Level.Fourth
        }
      ],
      requestedAsStudent: [
      ],
      requestedAsTeacher: [
        // {
        //   id:402,
        //   name: "DIC",
        //   level: Level.Fourth
        // }
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
