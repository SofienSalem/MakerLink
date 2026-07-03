import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/avatars';
@Component({
  selector: 'app-avatarradius',
  templateUrl: './avatarradius.component.html',
  styleUrls: ['./avatarradius.component.scss']
})
export class AvatarradiusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  html1: string = codeData.avatarsHTML1;
  ts1: string = codeData.avatarsTS1;
  html2: string = codeData.avatarsHTML2;
  ts2: string = codeData.avatarsTS2;
  html3: string = codeData.avatarsHTML3;
  ts3: string = codeData.avatarsTS3;
  html4: string = codeData.avatarsHTML4;
  ts4: string = codeData.avatarsTS4;
}
