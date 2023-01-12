import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardAboutPage } from './card-about.page';

const routes: Routes = [
  {
    path: '',
    component: CardAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardAboutPageRoutingModule {}
