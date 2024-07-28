import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[whiteShadowHover]',
  standalone: true
})
export class WhiteShadowHoverDirective {
  constructor(private renderer: Renderer2,
              private element: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.addClass(this.element.nativeElement, 'whiteShadowHover');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'whiteShadowHover');
  }

}
