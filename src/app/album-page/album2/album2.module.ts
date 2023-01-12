import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album2PageRoutingModule } from './album2-routing.module';

import { Album2Page } from './album2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album2PageRoutingModule
  ],
  declarations: [Album2Page]
})
export class Album2PageModule {}
