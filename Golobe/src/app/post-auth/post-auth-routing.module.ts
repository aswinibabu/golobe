import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/containers/dashboard-page/dashboard-page.component';
import { PostAuthComponent } from './post-auth.component';

const routes: Routes = [
  {
    path: '',
    component: PostAuthComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren : ()=>import('./dashboard/dashboard.module'). then (m=>m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostAuthRoutingModule { }
