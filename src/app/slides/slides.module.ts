import { NgModule } from '@angular/core';

import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesComponent } from './slides.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SlidesRoutingModule
  ],
  declarations: [SlidesComponent]
})
export class SlidesModule { }
