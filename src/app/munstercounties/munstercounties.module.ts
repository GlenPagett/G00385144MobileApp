import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunstercountiesPageRoutingModule } from './munstercounties-routing.module';

import { MunstercountiesPage } from './munstercounties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunstercountiesPageRoutingModule
  ],
  exports: [MunstercountiesPage],
  declarations: [MunstercountiesPage]
})
export class MunstercountiesPageModule {}
