import { Component } from '@angular/core';
import {  ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  scrollToTargetElement() {
    const targetElement = this.elementRef.nativeElement.querySelector('#targetElement');
    if (targetElement) {
      const offset = targetElement.offsetTop; // Get the offset position of the target element
      window.scrollTo({ top: offset, behavior: 'smooth' }); // Scroll to the target element smoothly
    }
  }
  
}
