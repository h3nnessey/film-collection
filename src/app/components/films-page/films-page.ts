import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FilmService } from '../../services/film/film.service';
import { SearchBar } from '../search-bar/search-bar';
import { FilmCard } from '../film-card/film-card';

@Component({
  selector: 'app-films-page',
  imports: [SearchBar, FilmCard],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsPage {
  private readonly films = inject(FilmService).films;

  protected readonly searchTerm = signal<string>('');

  protected readonly filteredFilms = computed(() => {
    return this.films().filter((film) =>
      film.title.toLowerCase().includes(this.searchTerm().toLowerCase()),
    );
  });

  protected filterFilms(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }
}
