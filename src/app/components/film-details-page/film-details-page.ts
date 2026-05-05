import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs';

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

  protected readonly id = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      distinctUntilChanged(),
    ),
  );

  protected goBack() {
    this.location.back();
  }
}
