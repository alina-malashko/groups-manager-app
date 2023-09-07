import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsListPageComponent } from './page/groups-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsListPageRoutingModule { }
