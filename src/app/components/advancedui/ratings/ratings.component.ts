import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  currentRate = 5;
  currentRate2 = 5;
  currentRate3 = 5;
  currentRate4 = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 0;
  hovered = 0;
  readonly = false;
  heartRate = 3.45;
  squareRate = 5;
  horiRate = 7;
  movieRate = 5;
  customRate = 6;

  ctrl: FormControl;

  constructor() {
    this.ctrl = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

}





