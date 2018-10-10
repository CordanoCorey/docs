import { Component, OnInit } from '@angular/core';

export const GROUPS = [
  {
    title: '.component.ts',
    images: [
      { id: 6, src: '../assets/screenshots/constructor.PNG' },
      { id: 7, src: '../assets/screenshots/subscription.PNG' },
      { id: 8, src: '../assets/screenshots/http-actions.PNG' },
      { id: 9, src: '../assets/screenshots/ngOnInit.PNG' },
    ]
  },
  {
    title: '.reducer.ts',
    images: [
      { id: 10, src: '../assets/screenshots/actions.PNG' },
      { id: 11, src: '../assets/screenshots/reducer.PNG' },
      { id: 12, src: '../assets/screenshots/selectors.PNG' },
      { id: 13, src: '../assets/screenshots/current-user-selectors.PNG' },
    ]
  },
  {
    title: '.model.ts',
    images: [
      { id: 1, src: '../assets/screenshots/model-classes.PNG' },
      { id: 2, src: '../assets/screenshots/collection-properties.PNG' },
      { id: 3, src: '../assets/screenshots/collection-methods.PNG' },
      { id: 4, src: '../assets/screenshots/collection-helpers.PNG' },
    ]
  },
  {
    title: '.component.html',
    images: [
      { id: 14, src: '../assets/placeholder.png' },
      { id: 15, src: '../assets/placeholder.png' },
      { id: 16, src: '../assets/placeholder.png' },
      { id: 17, src: '../assets/placeholder.png' },
    ]
  },
  {
    title: '.component.scss',
    images: [
      { id: 18, src: '../assets/angular-4.png' },
      { id: 19, src: '../assets/angular-4.png' },
      { id: 20, src: '../assets/angular-4.png' },
      { id: 21, src: '../assets/angular-4.png' },
    ]
  },
  {
    title: '.component.spec.ts',
    images: [
      { id: 14, src: '../assets/placeholder.png' },
      { id: 15, src: '../assets/placeholder.png' },
      { id: 16, src: '../assets/placeholder.png' },
      { id: 17, src: '../assets/placeholder.png' },
    ]
  },
  {
    title: '.module.ts',
    images: [
      { id: 18, src: '../assets/angular-4.png' },
      { id: 19, src: '../assets/angular-4.png' },
      { id: 20, src: '../assets/angular-4.png' },
      { id: 21, src: '../assets/angular-4.png' },
    ]
  },
  {
    title: 'routing.module.ts',
    images: [
      { id: 14, src: '../assets/placeholder.png' },
      { id: 15, src: '../assets/placeholder.png' },
      { id: 16, src: '../assets/placeholder.png' },
      { id: 17, src: '../assets/placeholder.png' },
    ]
  },
];

@Component({
  selector: 'docs-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  groups = GROUPS;

  constructor() { }

  ngOnInit() {
  }

}
