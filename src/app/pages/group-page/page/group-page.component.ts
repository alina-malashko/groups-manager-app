import { AppPath } from './../../../enums/routing-path-enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/interfaces/groups.interface';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit{

  private groupId!: number;

  public groupNumber: string | undefined;

  public students: IStudent[] | undefined;

  public columns: string[] = ['Дата принятия', 'ФИО студента', 'Действия'];

  public newStudent: string = '';

  constructor(
    private groupsService: GroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => this.groupId = param['id']);
    this.groupsService.getGroupNumber(this.groupId).subscribe(groupNumber => this.groupNumber = groupNumber);
    this.groupsService.listStudents(this.groupId).subscribe(students => this.students = this.sortInAlphabetOrder(students));
  }

  private sortInAlphabetOrder(students: IStudent[] | undefined): IStudent[] | undefined {
    return students?.sort(function(a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
  }

  public createStudent(): void {
    if (this.newStudent !== '') {
      this.groupsService.createStudent(this.newStudent, this.groupId);
      this.newStudent = '';
    }
  }

  public deleteStudent(studentsId: number): void {
    this.groupsService.deleteStudent(studentsId, this.groupId);
  }

  public backToGroupList(): void {
    this.router.navigate([AppPath.GroupsListPage]);
  }
}
