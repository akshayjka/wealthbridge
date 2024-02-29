import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent {
  fadeInRight: any;

  constructor (private router: Router) {}

  goToPageWeSign(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    //window.open('/product-details', '_blank');
  }

  goToPageWfalcon(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    //window.open('/product-details', '_blank');
  }

  goToPageWetrack(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    //window.open('/product-details', '_blank');
  }

  goToPageWconnect(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    //window.open('/product-details', '_blank');
  }

  goToPageAiBot(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    //window.open('/product-details', '_blank');
  }

  goToPagePaperlessBanking(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    //window.open('/product-details', '_blank');
  }

  goto(){
    this.router.navigateByUrl('path');
  }
}
