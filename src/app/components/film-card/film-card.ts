import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCard {}
