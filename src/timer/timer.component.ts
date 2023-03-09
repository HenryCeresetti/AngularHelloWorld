import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  timer = setInterval(() => {
    this.counter += 1;
  }, 1000);

  counter: number = 0;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }

  getMinutes() {
    return Math.trunc(this.counter / 60);
  }
}
/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timer = setInterval(() => {
    this.counter += 1;
  }, 1000);

  counter: number = 0;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }

  getMinutes() {
    return Math.trunc(this.counter / 60);
  }

  ngOnInit() {}
} */
