import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit(): void {}

  start($event: MouseEvent) {
    this.count++;
  }
}
