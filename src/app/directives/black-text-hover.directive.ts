import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[blackTextHover]',
  standalone: true
})
export class BlackTextHoverDirective {

  constructor(private renderer: Renderer2,
              private element: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.addClass(this.element.nativeElement, 'blackTextHover');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'blackTextHover');
  }

}
