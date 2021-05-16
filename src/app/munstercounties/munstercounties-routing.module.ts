import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunstercountiesPage } from './munstercounties.page';

const routes: Routes = [
  {
    path: '',
    component: MunstercountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunstercountiesPageRoutingModule {}
