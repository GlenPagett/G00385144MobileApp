import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntrimPageRoutingModule } from './antrim-routing.module';

import { AntrimPage } from './antrim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntrimPageRoutingModule
  ],
  declarations: [AntrimPage]
})
export class AntrimPageModule {}
