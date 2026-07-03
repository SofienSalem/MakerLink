import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/colors';
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  html1: string = codeData.colorsHTML1;
  ts1: string = codeData.colorsTS1;
  html2: string = codeData.colorsHTML2;
  ts2: string = codeData.colorsTS2;
  html3: string = codeData.colorsHTML3;
  ts3: string = codeData.colorsTS3;
}
