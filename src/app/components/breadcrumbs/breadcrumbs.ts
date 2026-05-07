import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { AppRoutes } from '@/routes';
import { FilmService } from '@/services/film/film.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, RouterLinkActive],
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

      if (id === AppRoutes.About.path) {
        return [AppRoutes.About];
      }

      const film = this.filmService.getById(id);

      if (film) {
        return [
          AppRoutes.Home,
          {
            path: `${id}`,
            label: film.title,
            exact: false,
          },
        ];
      }
    }

    return [AppRoutes.Home];
  });
}
