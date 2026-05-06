import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film/film.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilmDurationPipe } from '../../pipes/film-duration-pipe';

@Component({
  selector: 'app-film-details-page',
  imports: [FilmDurationPipe],
  templateUrl: './film-details-page.html',
  styleUrl: './film-details-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);
  private readonly params = toSignal(this.route.paramMap);

  protected readonly film = computed(() => {
    const id = this.params()?.get('id');

    return this.filmService.getById(id);
  });

  constructor() {
    effect(() => {
      if (!this.film()) {
        this.goToHome();
      }
    });
  }

  protected goToHome() {
    this.router.navigate(['/']);
  }
}
