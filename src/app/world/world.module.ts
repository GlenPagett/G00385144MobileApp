import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldPageRoutingModule } from './world-routing.module';

import { WorldPage } from './world.page';

import {WorldcountriesPageModule} from '../worldcountries/worldcountries.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldPageRoutingModule,
    WorldcountriesPageModule
  ],
  declarations: [WorldPage]
})
export class WorldPageModule {}
