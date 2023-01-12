import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album6PageRoutingModule } from './album6-routing.module';

import { Album6Page } from './album6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album6PageRoutingModule
  ],
  declarations: [Album6Page]
})
export class Album6PageModule {}
