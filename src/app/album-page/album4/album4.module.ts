import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album4PageRoutingModule } from './album4-routing.module';

import { Album4Page } from './album4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album4PageRoutingModule
  ],
  declarations: [Album4Page]
})
export class Album4PageModule {}
