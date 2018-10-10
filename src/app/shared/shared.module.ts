import { NgModule } from '@angular/core';
import { LibraryModule } from '@caiu/library';
import { ContainerComponent } from './container/container.component';


@NgModule({
  imports: [
    LibraryModule,
  ],
  declarations: [
    ContainerComponent,
  ],
  exports: [
    LibraryModule,
    ContainerComponent,
  ]
})
export class SharedModule { }
