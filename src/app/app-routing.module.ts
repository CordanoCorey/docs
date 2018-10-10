import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'docs'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule',
    data: {
      animation: {
        value: 'docs',
      }
    }
  },
  {
    path: 'apis',
    loadChildren: './apis/apis.module#ApisModule',
    data: {
      animation: {
        value: 'apis',
      }
    }
  },
  {
    path: 'slides',
    loadChildren: './slides/slides.module#SlidesModule',
    data: {
      animation: {
        value: 'slides',
      }
    }
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule',
    data: {
      animation: {
        value: 'projects',
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
