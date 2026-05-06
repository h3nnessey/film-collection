import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film/film.service';

interface Breadcrumb {
  path: string;
  label: string;
}

const DEFAULT_BREADCRUMBS: Breadcrumb[] = [
  {
    path: '/',
    label: 'Home',
  },
];
@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Breadcrumbs {
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);

  protected readonly routerEvent = toSignal(this.router.events);

  protected readonly breadcrumbs = computed(() => {
    const event = this.routerEvent();

    if (event instanceof NavigationEnd) {
      const paths = event.urlAfterRedirects.split('/');

      const id = paths[1];

      if (id === 'about') {
        return [
          {
            path: '/about',
            label: 'About',
          },
        ];
      }

      const film = this.filmService.getById(id);

      if (film) {
        return [
          ...DEFAULT_BREADCRUMBS,
          {
            path: `/${id}`,
            label: film.title,
          },
        ];
      }
    }

    return DEFAULT_BREADCRUMBS;
  });
}
