import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album1Page } from './album1.page';

const routes: Routes = [
  {
    path: '',
    component: Album1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album1PageRoutingModule {}
