import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album8PageRoutingModule } from './album8-routing.module';

import { Album8Page } from './album8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album8PageRoutingModule
  ],
  declarations: [Album8Page]
})
export class Album8PageModule {}
