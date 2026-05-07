import { FilmService } from '@/services/film/film.service';
import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const filmIdGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const filmService = inject(FilmService);

  const id = route.paramMap.get('id');

  return filmService.getById(id) ? true : router.createUrlTree(['/']);
};
