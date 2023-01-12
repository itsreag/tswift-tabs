import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardNewRelPageRoutingModule } from './card-new-rel-routing.module';

import { CardNewRelPage } from './card-new-rel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardNewRelPageRoutingModule
  ],
  declarations: [CardNewRelPage]
})
export class CardNewRelPageModule {}
