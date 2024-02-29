import { Component } from '@angular/core';

@Component({
  selector: 'app-accounting-for-hire',
  templateUrl: './accounting-for-hire.component.html',
  styleUrls: ['./accounting-for-hire.component.scss']
})
export class AccountingForHireComponent {
  isSpinning = false;

  // isSpinning = false;

  startSpin() {
    if (!this.isSpinning) {
      this.isSpinning = true;
    }
  }
}
