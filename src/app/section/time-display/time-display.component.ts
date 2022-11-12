import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: number | undefined;
  test: number = 1;

  constructor() {
    console.log(this.inputData);
  }

  ngOnInit(): void {}
}
