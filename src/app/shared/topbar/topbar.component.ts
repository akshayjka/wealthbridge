import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  scrollingDown: boolean = false;
  showDropdown = true;
  isHovered = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrollingDown = window.scrollY > 100; // Adjust the value based on when you want the effect to trigger
  }
  constructor(private route:Router) {}


  goto() {
    this.route.navigateByUrl('land')
  }

  goto1(){
    this.route.navigateByUrl('acc-for-hire')
  }
  goto2() {
    this.route.navigateByUrl('business');
  }
  goto3() {
    this.route.navigateByUrl('fin-management');
  }
  goto4() {
    this.route.navigateByUrl('software');
  }
  goto5() {
    this.route.navigateByUrl('tax')
  }
  goto6() {
    this.route.navigateByUrl('about-us');
  }

}
