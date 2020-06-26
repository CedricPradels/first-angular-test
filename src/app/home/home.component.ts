import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter++;
  }

  genClasses() {
    let classes = {
      active: this.clickCounter < 4,
      inactive: this.clickCounter >= 4,
    };
    return classes;
  }
}
