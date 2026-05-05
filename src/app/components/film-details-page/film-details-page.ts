import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film/film.service';

@Component({
  selector: 'app-film-details-page',
  imports: [],
  templateUrl: './film-details-page.html',
  styleUrl: './film-details-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  private readonly params = toSignal(this.route.params);
  protected readonly id = computed<number | undefined>(() => {
    return +this.params()?.['id'];
  });

  protected film = inject(FilmService).getById(this.id());

  protected goBack() {
    this.location.back();
  }
}
