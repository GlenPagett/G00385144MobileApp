import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntrimPage } from './antrim.page';

const routes: Routes = [
  {
    path: '',
    component: AntrimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntrimPageRoutingModule {}
