import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album7PageRoutingModule } from './album7-routing.module';

import { Album7Page } from './album7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album7PageRoutingModule
  ],
  declarations: [Album7Page]
})
export class Album7PageModule {}
