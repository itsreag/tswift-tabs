import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album10PageRoutingModule } from './album10-routing.module';

import { Album10Page } from './album10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album10PageRoutingModule
  ],
  declarations: [Album10Page]
})
export class Album10PageModule {}
