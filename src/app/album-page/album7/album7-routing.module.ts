import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album7Page } from './album7.page';

const routes: Routes = [
  {
    path: '',
    component: Album7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album7PageRoutingModule {}
