import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {

  @Input() appBold: string = '400';

  @Input() fontLeave: string = '400';

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', this.appBold);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', this.fontLeave);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    console.log(this.el.nativeElement);    
  }

  ngOnInit(): void {
    console.log(this.el.nativeElement);
  }
    
}
