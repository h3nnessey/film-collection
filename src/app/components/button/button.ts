import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

export type ButtonVariants = 'primary' | 'danger';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  public readonly variant = input<ButtonVariants>('primary');
  public readonly buttonClick = output<MouseEvent>();

  protected handleClick(event: MouseEvent) {
    this.buttonClick.emit(event);
  }
}
