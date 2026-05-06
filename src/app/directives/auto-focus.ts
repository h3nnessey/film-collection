import {
  Directive,
  ElementRef,
  inject,
  type AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocus implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);

  ngAfterViewInit() {
    const el = this.elementRef.nativeElement;

    if (el.focus && typeof el.focus === 'function') {
      el?.focus();
    }
  }
}
