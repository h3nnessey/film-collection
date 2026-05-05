import { computed, Injectable, signal } from '@angular/core';
import FILMS_MOCK from './films.json';

export interface Film {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  duration: number;
  description: string;
  posterUrl: string;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly _films = signal<Film[]>(FILMS_MOCK);
  public readonly films = this._films.asReadonly();

  public readonly favoriteFilms = computed(() =>
    this._films().filter((film) => film.isFavorite),
  );

  public getById(id?: number) {
    return this._films().find((film) => film.id === id);
  }

  public toggleFavorite(id?: number) {
    this._films.update((films) =>
      films.map((film) =>
        film.id === id ? { ...film, isFavorite: !film.isFavorite } : film,
      ),
    );
  }
}
