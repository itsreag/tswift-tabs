import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album8Page } from './album8.page';

const routes: Routes = [
  {
    path: '',
    component: Album8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album8PageRoutingModule {}
