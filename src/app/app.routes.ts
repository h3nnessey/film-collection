import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Film Collection | Home',
    loadComponent: () =>
      import('./components/films-page/films-page').then((m) => m.FilmsPage),
  },
  {
    path: 'about',
    pathMatch: 'full',
    title: 'Film Collection | About',
    loadComponent: () =>
      import('./components/about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: ':id',
    title: 'Film Collection | Film Details',
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
