import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'docs-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    trigger('flip', [
      state('front', style({
        transform: 'rotateY(0deg)',
      })),
      state('back', style({
        transform: 'rotateY(180deg)',
      })),
      transition('back <=> front', [
        animate('{{ time }}')
      ], { params: { time: '500ms' } })
    ])
  ]
})
export class ContainerComponent {

  public data = { value: 'front', time: null };

  @Input('timing')
  public timing: string;

  public toggle() {
    this.data = {
      value: this.data.value === 'front' ? 'back' : 'front',
      time: this.timing || '1000ms'
    };
  }

}
