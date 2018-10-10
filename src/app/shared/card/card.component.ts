import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'docs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() image = { src: '' };

  constructor() { }

  ngOnInit() {
  }

}
