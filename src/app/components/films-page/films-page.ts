import { FilmService } from '@/services/film/film.service';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FilmCard } from '../film-card/film-card';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-films-page',
  imports: [SearchBar, FilmCard],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsPage {
  private readonly filmService = inject(FilmService);
  protected readonly searchTerm = signal<string>('');

  protected readonly filteredFilms = computed(() => {
    return this.filmService
      .films()
      .filter((film) =>
        film.title.toLowerCase().includes(this.searchTerm().toLowerCase()),
      );
  });

  protected filterFilms(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  protected handleToggleFavorite(id: number) {
    this.filmService.toggleFavorite(id);
  }
}
