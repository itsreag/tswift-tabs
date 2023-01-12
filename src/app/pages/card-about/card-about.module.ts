import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardAboutPageRoutingModule } from './card-about-routing.module';

import { CardAboutPage } from './card-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardAboutPageRoutingModule
  ],
  declarations: [CardAboutPage]
})
export class CardAboutPageModule {}
