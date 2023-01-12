import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album4Page } from './album4.page';

const routes: Routes = [
  {
    path: '',
    component: Album4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album4PageRoutingModule {}
