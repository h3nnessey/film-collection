import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { FilmService, type Film } from '../../services/film/film.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCard {
  public readonly film = input.required<Film>();
  private readonly filmService = inject(FilmService);

  protected handleClick(event: Event) {
    event.stopPropagation();

    this.filmService.toggleFavorite(this.film().id);
  }
}
