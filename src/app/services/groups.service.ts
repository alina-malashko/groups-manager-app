import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGroup, IStudent } from '../interfaces/groups.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private groups: IGroup[] = [
    {
      id: 1,
      number: '20-01',
      students: [
        {
          id: 1,
          name: 'Алексеев Петр',
          date: new Date(2020, 8, 20)
        },
        {
          id: 2,
          name: 'Андреев Андрей',
          date: new Date(2020, 8, 10)
        },
        {
          id: 3,
          name: 'Васильев Александр',
          date: new Date(2020, 8, 21)
        },
        {
          id: 4,
          name: 'Петров Петр',
          date: new Date(2019, 1, 31)
        },
      ],
      dateOfCreation: new Date(2019, 0, 31)
    },
    {
      id: 2,
      number: '19-03',
      students: [
        {
          id: 1,
          name: 'Алексеев Петр',
          date: new Date(2020, 8, 20)
        },
        {
          id: 2,
          name: 'Андреев Андрей',
          date: new Date(2020, 8, 10)
        },
        {
          id: 3,
          name: 'Васильев Александр',
          date: new Date(2020, 8, 21)
        },
        {
          id: 4,
          name: 'Петров Петр',
          date: new Date(2019, 1, 31)
        },
        {
          id: 5,
          name: 'Алексеев Петр',
          date: new Date(2020, 8, 20)
        },
        {
          id: 6,
          name: 'Андреев Андрей',
          date: new Date(2020, 8, 10)
        },
        {
          id: 7,
          name: 'Васильев Александр',
          date: new Date(2020, 8, 21)
        },
        {
          id: 8,
          name: 'Петров Петр',
          date: new Date(2019, 1, 31)
        },
      ],
      dateOfCreation: new Date(2018, 3, 20)
    },
    {
      id: 3,
      number: '19-01',
      students: [
        {
          id: 1,
          name: 'Васильев Александр',
          date: new Date(2020, 8, 21)
        },
        {
          id: 2,
          name: 'Петров Петр',
          date: new Date(2019, 1, 31)
        },
        {
          id: 3,
          name: 'Алексеев Петр',
          date: new Date(2020, 8, 20)
        },
      ],
      dateOfCreation: new Date(2018, 0, 13)
    },
  ]

  public listGroups(): Observable<IGroup[]> {
    return of(this.groups);
  }

  public createGroup(groupNumber: string): Observable<number> {
    const newGroupId = this.groups.length + 1;
    this.groups.push(
      {
        id: newGroupId,
        number: groupNumber,
        students: [],
        dateOfCreation: new Date()
      }
    )
    return of(newGroupId);
  }

  public listStudents(groupId: number): Observable<IStudent[] | undefined> {
    const group = this.groups.find(group => group.id == groupId)
    return of(group?.students);
  }

  public createStudent(studentsName: string, groupId: number): void {
    const group = this.groups.find(group => group.id == groupId);
    if (group) {
      const newStudentId = group.students.length ? group.students[group.students.length - 1].id + 1 : 1;
      group?.students.push(
        {
          id: newStudentId,
          name: studentsName,
          date: new Date()
        }
      )
    }
  }

  public deleteStudent(studentsId: number, groupId: number): void {
    const group = this.groups.find(group => group.id == groupId)
    const student = group?.students.findIndex(student => student.id == studentsId);
    if (student || student === 0) group?.students.splice(student, 1);
  }

  public getGroupNumber(groupId: number): Observable<string | undefined> {
    const group = this.groups.find(group => group.id == groupId);
    return of(group?.number);
  }
}
