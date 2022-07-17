import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-with-onpush',
  templateUrl: './child-with-onpush.component.html',
  styleUrls: ['./child-with-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildWithOnpushComponent implements OnInit {

  @Input() fruits: any[];

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  childUpdate(): void {
    this.counter++;
    this.fruits[0].name = this.fruits[0].name.concat(' ').concat(this.counter.toString());
  }

}
