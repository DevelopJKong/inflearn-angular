import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  count = 0;

  @Output() clickEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.clickEvent.emit(10);
  }
}
