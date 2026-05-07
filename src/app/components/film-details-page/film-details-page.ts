import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilmDurationPipe } from '@/pipes/film-duration-pipe';
import { FilmService } from '@/services/film/film.service';
import { Button } from '../button/button';

@Component({
  selector: 'app-film-details-page',
  imports: [Button, FilmDurationPipe],
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

  protected goToHome() {
    this.router.navigate(['/']);
  }
}
