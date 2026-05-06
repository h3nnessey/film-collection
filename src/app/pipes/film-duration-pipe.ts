import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmDuration',
})
export class FilmDurationPipe implements PipeTransform {
  transform(value: number): string {
    if (Number.isFinite(value) && value >= 0) {
      const minutes = value % 60;
      const hours = (value - minutes) / 60;

      if (hours > 0) {
        return `${hours}h${minutes > 0 ? ` ${minutes}min` : ''}`;
      }

      return `${value}min`;
    }

    return 'Unknown';
  }
}
