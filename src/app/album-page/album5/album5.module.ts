import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Album5PageRoutingModule } from './album5-routing.module';

import { Album5Page } from './album5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Album5PageRoutingModule
  ],
  declarations: [Album5Page]
})
export class Album5PageModule {}
