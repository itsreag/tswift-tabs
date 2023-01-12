import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Album9Page } from './album9.page';

const routes: Routes = [
  {
    path: '',
    component: Album9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Album9PageRoutingModule {}
