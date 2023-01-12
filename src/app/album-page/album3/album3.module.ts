import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album3PageRoutingModule } from './album3-routing.module';

import { Album3Page } from './album3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album3PageRoutingModule
  ],
  declarations: [Album3Page]
})
export class Album3PageModule {}
