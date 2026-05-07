import type { Film } from '@/services/film/film.service';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { type ButtonVariants, Button } from '../button/button';

export interface FavButtonConfig {
  variant: ButtonVariants;
  text: string;
}
@Component({
  selector: 'app-film-card',
  imports: [RouterLink, Button],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCard {
  public readonly film = input.required<Film>();
  public readonly toggleFavorite = output();

  protected readonly favButtonConfig = computed<FavButtonConfig>(() => ({
    variant: this.film().isFavorite ? 'danger' : 'primary',
    text: this.film().isFavorite ? 'Remove from favorites' : 'Add to favorites',
  }));

  protected handleClick(event: MouseEvent) {
    event.stopPropagation();

    this.toggleFavorite.emit();
  }
}
