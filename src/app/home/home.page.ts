import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  counterInterval: any;
  countDown: any = {};
  countDownType = 'New Year';
  constructor() {}

  ionViewDidEnter() {
    this.startCounter();
  }
  getGap() {
    const year = new Date().getFullYear();
    const nextYear = new Date(year + 1, 1, 1);
    const now = new Date();

    let difference = nextYear.getTime() - now.getTime();

    const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;

    const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;

    const minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;

    const secondsDifference = Math.floor(difference / 1000);


    this.countDown = {
      days: this.decimalize(daysDifference),
      hours: this.decimalize(hoursDifference),
      minutes: this.decimalize(minutesDifference),
      seconds: this.decimalize(secondsDifference)
    };
  }

  startCounter() {
      this.stopCounter();
      this.counterInterval = setInterval(() => {
        this.getGap();
      }, 1000);
  }

  stopCounter() {
    if (this.counterInterval) {clearInterval(this.counterInterval);}
  }

  decimalize(value: number) {
    return value < 10 ? '0' + value : value;
  }

  ionViewDidLeave() {
    this.stopCounter();
  }
}
