import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.scss']
})
export class FinComponent {
  scrollToTopButton: any;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' for smooth scrolling
  }
  @HostListener('window:scroll', [])
  onScroll() {
    // Show the button when the user scrolls down a certain amount
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const showButtonThreshold = 200; // Adjust as needed
    this.scrollToTopButton = document.querySelector('.scroll-to-top');

    if (scrollY > showButtonThreshold) {
      this.scrollToTopButton.classList.add('show');
    } else {
      this.scrollToTopButton.classList.remove('show');
    }
  }
}
