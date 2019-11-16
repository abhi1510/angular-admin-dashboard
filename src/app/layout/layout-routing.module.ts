import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
            path: 'tables',
            component: TablesComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
