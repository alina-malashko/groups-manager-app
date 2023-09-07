import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListPageRoutingModule } from './groups-list-page-routing.module';
import { GroupsListPageComponent } from './page/groups-list-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GroupsListPageComponent
  ],
  imports: [
    CommonModule,
    GroupsListPageRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class GroupsListPageModule { }
