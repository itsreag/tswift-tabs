import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardNewRelPage } from './card-new-rel.page';

const routes: Routes = [
  {
    path: '',
    component: CardNewRelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardNewRelPageRoutingModule {}
