import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album2Page } from './album2.page';

const routes: Routes = [
  {
    path: '',
    component: Album2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album2PageRoutingModule {}
