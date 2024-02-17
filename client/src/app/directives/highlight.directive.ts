import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  
  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(this.elementRef)
    this.elementRef.nativeElement.classList.add('highlight');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log(this.elementRef)
    this.elementRef.nativeElement.classList.remove('highlight');
  }
}
