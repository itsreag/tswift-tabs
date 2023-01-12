import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album5Page } from './album5.page';

const routes: Routes = [
  {
    path: '',
    component: Album5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album5PageRoutingModule {}
