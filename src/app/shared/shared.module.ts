import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { LibraryModule } from '@caiu/library';

import { ContainerComponent } from './container/container.component';
import { CardComponent } from './card/card.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { GroupComponent } from './group/group.component';
import { ImageComponent } from './image/image.component';
import { LoaderComponent } from './loader/loader.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  imports: [
    LibraryModule,
    MatGridListModule,
  ],
  declarations: [
    ContainerComponent,
    CardComponent,
    DialogComponent,
    FormComponent,
    GroupComponent,
    ImageComponent,
    LoaderComponent,
    PanelComponent,
  ],
  exports: [
    LibraryModule,
    MatGridListModule,
    ContainerComponent,
    CardComponent,
    DialogComponent,
    FormComponent,
    GroupComponent,
    ImageComponent,
    LoaderComponent,
    PanelComponent,
  ],
  entryComponents: [
    ImageComponent,
  ]
})
export class SharedModule { }
