import { AppPath } from './enums/routing-path-enum';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: AppPath.Core,
    redirectTo: AppPath.GroupsListPage,
    pathMatch: 'full'
  },
  {
    path: AppPath.GroupsListPage,
    loadChildren: () => import('./pages/groups-list-page/groups-list-page.module').then(m => m.GroupsListPageModule)
  },
  {
    path: AppPath.GroupPage,
    loadChildren: () => import('./pages/group-page/group-page.module').then(m => m.GroupPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
