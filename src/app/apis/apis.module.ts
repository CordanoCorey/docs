import { NgModule } from '@angular/core';

import { ApisRoutingModule } from './apis-routing.module';
import { ApisComponent } from './apis.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ApisRoutingModule
  ],
  declarations: [ApisComponent]
})
export class ApisModule { }
