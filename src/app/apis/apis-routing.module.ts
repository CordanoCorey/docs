import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApisComponent } from './apis.component';

const routes: Routes = [{
  path: '',
  component: ApisComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApisRoutingModule { }
