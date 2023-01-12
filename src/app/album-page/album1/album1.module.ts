import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album1PageRoutingModule } from './album1-routing.module';

import { Album1Page } from './album1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album1PageRoutingModule
  ],
  declarations: [Album1Page]
})
export class Album1PageModule {}
