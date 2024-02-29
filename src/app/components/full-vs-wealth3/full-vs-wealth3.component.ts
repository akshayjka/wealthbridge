import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-full-vs-wealth3',
  templateUrl: './full-vs-wealth3.component.html',
  styleUrls: ['./full-vs-wealth3.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', animate('0.5s ease-out')),
      transition('back => front', animate('0.5s ease-in'))
    ])
  ]
})
export class FullVsWealth3Component {
  flipState: 'front' | 'back' = 'back';

  toggleFlip() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';

    // Automatically flip back to the front side after 10 seconds
    if (this.flipState === 'back') {
      setTimeout(() => {
        this.flipState = 'front';
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  }
}
