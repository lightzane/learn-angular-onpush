import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits = [
    {
      name: 'Apple'
    },
    {
      name: 'Orange'
    },
    {
      name: 'Peach'
    },
    {
      name: 'Coconut'
    },
    {
      name: 'Cherry'
    }
  ];

  counter = 0;

  /** Updates existing input, therefore, child component (OnPush) does not update until it updates internally */
  parentMutatesExisting(): void {
    this.counter++;
    this.fruits[0].name = this.fruits[0].name.concat(' ').concat(this.counter.toString());
  }

  /** Causes the child component (OnPush) to also update the input */
  parentReplacesExisting(): void {
    this.counter = 0;
    const newFruits = [...this.fruits];
    newFruits[0].name = newFruits[0].name.includes('Apple') ? 'Mango' : 'Apple';
    this.fruits = newFruits;
  }
}
