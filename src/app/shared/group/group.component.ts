import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DumbComponent } from '@caiu/library';

import { Image } from '../models';
import { ImageComponent } from '../image/image.component';
@Component({
  selector: 'docs-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent extends DumbComponent implements OnInit {

  @Input() public group;

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
  }

  selectImage(img: Image) {
    this.openDialog(ImageComponent, {
      data: img.src,
      width: '1000px'
    });
  }

}
