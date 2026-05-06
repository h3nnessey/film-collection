import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { AutoFocus } from '../../directives/auto-focus';

@Component({
  selector: 'app-search-bar',
  imports: [AutoFocus],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBar {
  public inputChange = output<string>();

  protected handleChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.inputChange.emit(target.value);
  }
}
