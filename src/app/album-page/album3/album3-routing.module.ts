import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album3Page } from './album3.page';

const routes: Routes = [
  {
    path: '',
    component: Album3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album3PageRoutingModule {}
