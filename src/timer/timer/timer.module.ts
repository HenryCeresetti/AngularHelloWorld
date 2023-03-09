import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MeComponent, TimerComponent],
})
export class TimerModule {}
