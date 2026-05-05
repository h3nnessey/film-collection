import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FilmService } from '../../services/film/film.service';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-films-page',
  imports: [RouterLink, SearchBar],
  templateUrl: './films-page.html',
  styleUrl: './films-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsPage {
  protected readonly films = inject(FilmService).films;
}
