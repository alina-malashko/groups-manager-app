import { AppPath } from './../../../enums/routing-path-enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup } from 'src/app/interfaces/groups.interface';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-list-page',
  templateUrl: './groups-list-page.component.html',
  styleUrls: ['./groups-list-page.component.scss']
})
export class GroupsListPageComponent implements OnInit {

  public groups: IGroup[] | undefined;

  public columns: string[] = ['Номер', 'Количество студентов', 'Действия'];

  public newGroup: string = '';

  constructor(private groupsService: GroupsService, private router: Router) {}

  ngOnInit(): void {
    this.groupsService.listGroups().subscribe(groups => this.groups = this.sortByDateOfCreation(groups));
  }

  private sortByDateOfCreation(groups: IGroup[] | undefined): IGroup[] | undefined {
    return groups?.sort(function(a, b) {
      const dateA = a.dateOfCreation;
      const dateB = b.dateOfCreation;
      return Number(dateA) - Number(dateB);
    })
  }

  public editGroupInfo(id: number) {
    this.router.navigate([AppPath.GroupPageFullPath + id])
  }

  public createGroup(): void {
    if (this.newGroup !== '') {
      this.groupsService.createGroup(this.newGroup)
      .subscribe(id => this.router.navigate([AppPath.GroupPageFullPath + id]));
    }
  }
}
