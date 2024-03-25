import { Injectable } from '@angular/core';

export enum Level {
  First = '1.',
  Second = '2.',
  Third = '3.',
  Fourth = '4.',
  Fifth = '5.',
}

export interface Subject {
  id: number;
  name: string;
  level: Level; //jahrgang in dem ma ds fach hat
}

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor() {}
}