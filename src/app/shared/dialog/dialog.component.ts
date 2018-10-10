import { Component, OnInit, Input } from '@angular/core';

import { DialogAction } from '../models';

@Component({
  selector: 'docs-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() title = '';
  @Input() actions: DialogAction[] = [];

  constructor() { }

  ngOnInit() {
  }

}
