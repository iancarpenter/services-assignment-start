import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveToActiveCount: number = 0;
  activeToInActiveCount: number = 0;

  incrementInactiveToActive() {
    this.inactiveToActiveCount++;
    console.log('Inactive to active count: ' + this.inactiveToActiveCount);
  }

  incrementActiveToInActive() {
    this.activeToInActiveCount++;
    console.log('Active to inactive count: ' + this.activeToInActiveCount);
  }
}
