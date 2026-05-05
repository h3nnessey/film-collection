import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/films-page/films-page').then((m) => m.FilmsPage),
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./components/film-details-page/film-details-page').then(
        (m) => m.FilmDetailsPage,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
