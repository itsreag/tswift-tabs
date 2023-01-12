import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album10Page } from './album10.page';

const routes: Routes = [
  {
    path: '',
    component: Album10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album10PageRoutingModule {}
