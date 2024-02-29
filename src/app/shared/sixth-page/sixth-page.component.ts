import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-page',
  templateUrl: './sixth-page.component.html',
  styleUrls: ['./sixth-page.component.scss']
})
export class SixthPageComponent implements OnInit{
  ngOnInit() {
  }

  users = [
    { 
      img:"/assets/clients/1.jpg",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    },
    { 
      img:"/assets/clients/2.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"/assets/clients/3.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"/assets/clients/4.jpg",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"/assets/clients/5.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"/assets/clients/6.jpg",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"/assets/clients/7.jpg",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"/assets/clients/8.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"assets/images/wecodee/testimonial/9.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"assets/images/wecodee/testimonial/10.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"assets/images/wecodee/testimonial/11.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    },
    { 
      img:"assets/images/wecodee/testimonial/12.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top.",
      // width: "40px",
      // height: "40px"
    }
  ]

  testimonialCarouselOptions= {
    items: 1,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<img src="/assets/clients/left.png">', '<img src="/assets/clients/right.png">'],
    autoplay: true,
    autoplayTimeout: 2000,  
    //autoplayTimeout:5000 //for default vlaue
    slideSpeed: 300,
    paginationSpeed: 500,
    loop: true,
    // responsive: {
    //     0: {
    //         items: 1,
    //         margin: 10
    //     },
    //     575: {
    //         items:2,
    //         margin: 10
    //     },
    //     991: {
    //         items: 2,
    //         margin: 30
    //     },
    //     1199: {
    //         items: 3,
    //         margin: 30
    //     }
    // }
  }


}
