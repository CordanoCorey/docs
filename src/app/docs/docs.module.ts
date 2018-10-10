import { NgModule } from '@angular/core';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DocsRoutingModule
  ],
  declarations: [DocsComponent]
})
export class DocsModule { }
