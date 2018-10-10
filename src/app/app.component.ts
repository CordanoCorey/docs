import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';
import { HttpActions } from '@caiu/library';
import { Store } from '@ngrx/store';

import { DocsActions } from './docs/docs.reducer';
import { ConfigActions } from './shared/reducers';
import { environment } from '../environments/environment';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    //   trigger('routerAnimations', [
    //     transition('* => docs', [
    //       query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    //       query(':leave', style({ zIndex: 100 })),
    //       query(':enter', style({ transform: 'translateY(100%)' })),

    //       group([
    //         query(':leave', group([
    //           animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
    //           animateChild()
    //         ])),
    //         query(':enter', group([
    //           animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)' })),
    //           animateChild()
    //         ]))
    //       ])
    //     ]),
    //     transition('docs => *', [
    //       query(':enter, :leave',
    //         style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    //       query(':enter', [
    //         style({ opacity: 0, transform: 'translateX(100%)' }),
    //         query('contributor', [
    //           style({ opacity: 0, transform: 'scale(0)' })
    //         ])
    //       ]),

    //       query(':leave', [
    //         query('.image', [
    //           stagger(50, [
    //             animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(-50px)' }))
    //           ])
    //         ]),
    //         animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateX(-100%)' }))
    //       ]),

    //       group([
    //         query(':enter', [
    //           animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
    //         ]),
    //         query(':enter contributor', [
    //           stagger(200, [
    //             animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
    //           ])
    //         ])
    //       ])
    //     ])
    //   ])
  ]
})
export class AppComponent implements OnInit {

  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch(ConfigActions.initialize(environment));
    this.store.dispatch(
      HttpActions.get('docs.json', DocsActions.LOAD)
    );
  }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
