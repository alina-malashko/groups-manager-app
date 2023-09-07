import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupPageRoutingModule } from './group-page-routing.module';
import { GroupPageComponent } from './page/group-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GroupPageComponent
  ],
  imports: [
    CommonModule,
    GroupPageRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class GroupPageModule { }
