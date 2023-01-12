import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album6Page } from './album6.page';

const routes: Routes = [
  {
    path: '',
    component: Album6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album6PageRoutingModule {}
