import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/badge';
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isCollapsed = true;
  html1: string = codeData.badgeHTML1;
  ts1: string = codeData.badgeTS1;
  public isCollapsed2 = true;
  html2: string = codeData.badgeHTML2;
  ts2: string = codeData.badgeTS2;
}
