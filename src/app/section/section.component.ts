import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  present = 0;
  constructor() {}

  startTime($event: number) {
    this.present = $event;
  }

  ngOnInit(): void {}
}
