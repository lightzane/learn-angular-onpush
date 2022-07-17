import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-with-default',
  templateUrl: './child-with-default.component.html',
  styleUrls: ['./child-with-default.component.scss'],
})
export class ChildWithDefaultComponent implements OnInit {

  @Input()
  fruits: any[];

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  childUpdate(): void {
    this.counter++;
    this.fruits[0].name = this.fruits[0].name.concat(' ').concat(this.counter.toString());
  }

}
