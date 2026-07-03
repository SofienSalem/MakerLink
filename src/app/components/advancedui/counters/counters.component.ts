import { Component, OnInit } from '@angular/core';
import { TimeInterface } from 'angular-cd-timer';
import { Subscription, interval } from 'rxjs';




@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})


export class CountersComponent implements OnInit {

  timerInfo = '';
  private subscription!: Subscription;

  public dateNow = new Date();
  public dDay = new Date('may 11 2024 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  constructor() { }

  options = {
    decimalPlaces: 4,
  };
  ngOnInit(): void {
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });



  }

  onComplete(data: any) {
    data.elt.nativeElement.classList.add("muteCount")
  }

  onTick(data: TimeInterface) {
    this.timerInfo = '';
  }

  onStart(data: any) {

  }

}
