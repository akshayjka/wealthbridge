import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { constructor } from 'jasmine';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {
  // vid: any;
  // vid: any = document.getElementById("myVideo");
  
  @ViewChild('myVideo') videoElement!: ElementRef;
  constructor() {
    // const vid = document.getElementById("myVideo");
    //  this.vid = document.getElementById("myVideo");
    //   this.vid.playbackRate = 1.5;
    console.log("Hi us working");
    // this.vid = document.getElementById("myVideo");
    // this.vid.playbackRate = 2.0;
    // this.vid('video').playbackRate = 3.0;
    // this.videoElement.nativeElement.playbackRate = 2.0;
  }
  ngOnInit() {
    // throw new Error('Method not implemented.');
    // this.videoElement.nativeElement.playbackRate = 4.0;
    console.log("oninit")
  }
  // increasePlaybackSpeed(speed: number) {
  //   this.videoElement.nativeElement.playbackRate = 4.0;
  //   console.log(" the button is working");
  // }
  
}
