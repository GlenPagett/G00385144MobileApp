import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldcountriesPageRoutingModule } from './worldcountries-routing.module';

import { WorldcountriesPage } from './worldcountries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldcountriesPageRoutingModule
  ],
  exports: [WorldcountriesPage],
  declarations: [WorldcountriesPage]
})
export class WorldcountriesPageModule {}
