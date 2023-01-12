import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album9PageRoutingModule } from './album9-routing.module';

import { Album9Page } from './album9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album9PageRoutingModule
  ],
  declarations: [Album9Page]
})
export class Album9PageModule {}
