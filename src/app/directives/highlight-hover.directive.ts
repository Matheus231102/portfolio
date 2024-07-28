import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlightHover]',
  standalone: true
})
export class HighlightHoverDirective {

  constructor(private renderer: Renderer2,
              private element: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.addClass(this.element.nativeElement, 'highlightHover');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'highlightHover');
  }

}
