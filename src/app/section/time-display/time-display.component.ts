import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: number | undefined;
  min: number = 0;
  sec: number = 0;
  ms: number = 0;
  timeInterval: any; // ? time은 정확히 어떤 타입인거지?
  constructor() {
    console.log(this.inputData);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
    clearInterval(this.timeInterval);
  }

  ngOnChange(changes: SimpleChange) {
    // ! SimpleChange 하고 onChange는 무슨차이?
    for (const propKeyName in changes) {
      if (propKeyName === 'start') {
      }
    }
  }

  ngOnInit(): void {}
}
