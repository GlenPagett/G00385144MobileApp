import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UlstercountiesPageRoutingModule } from './ulstercounties-routing.module';

import { UlstercountiesPage } from './ulstercounties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UlstercountiesPageRoutingModule
  ],
  exports: [UlstercountiesPage],
  declarations: [UlstercountiesPage]
})
export class UlstercountiesPageModule {}
