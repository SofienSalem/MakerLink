import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/alert';

interface Alert {
	type: string;
	message: string;
}

const alertswithicons = [
  {
    id: Math.random(),
   message: 'Well done! You successfully read this important alert message.',
    icon:"fa fa-check-circle-o me-2",
    type: 'success',
  },

  {
    id:Math.random(),
    message: "Heads up! This alert needs your attention, but it's not super important.",
    type: 'info',
    icon:"fa fa-bell-o me-2",

  },
  {
    id:Math.random(),
    message: "Warning! Better check yourself, you're not looking too good.Better check yourself, you're",
    type: 'warning',
    icon:'fa fa-exclamation me-2'

  },
  {
    id:Math.random(),
    message: 'Oh snap!Change a few things up and try submitting again.',
    type: 'danger',
    icon:"fa fa-frown-o me-2"
  }

]

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']

})
export class AlertsComponent implements OnInit {
	alerts = [
    {
      type: 'success',
      message: 'This is an success alert',
    },
    {
      type: 'info',
      message: 'This is an info alert',
    },
    {
      type: 'warning',
      message: 'This is a warning alert',
    },
    {
      type: 'danger',
      message: 'This is a danger alert',
    },
    {
      type: 'primary',
      message: 'This is a primary alert',
    },
    {
      type: 'secondary',
      message: 'This is a secondary alert',
    },
  ];


  alertswithlinks = [
    {
      id: Math.random(),
      strong: 'Well done!',
      message: 'You successfully read',
      link:"this important alert message.",
      type: 'success',
    },
    {
      id:Math.random(),
      strong: 'Hurry Up!',
      message: 'alert needs your attention.',
      link:"but its not super important.",
      type: 'info',

    },
    {
      id:Math.random(),
      strong: 'Warning! ',
      message: "Better check yourself, you're",
      link:"not looking too good.",
      type: 'warning',

    },
    {
      id:Math.random(),
      strong: 'Oh snap! ',
      message: 'and try submitting again.',
      link:"change a few things up.",
      type: 'danger',

    }

  ]
  alertwithavatar=[

  ]

  alertswithicons = alertswithicons

  constructor() { }

  ngOnInit(): void {
  }
close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}
close2(id:number){
    let data = this.alertswithlinks.filter((ele:any)=>{
      return ele.id !== id
    })
    this.alertswithlinks = data
  }
  close3(id:number){
    let data=this.alertswithicons.filter((ele:any)=>{
      return ele.id  !==id
    })
    this.alertswithicons = data
  }

  staticAlertClosed = true
  secondAlertClosed=true
  alertClosed=true
  alertClosed2=true
  alertClosed3=true
  alertClosed4=true
  alertClosed5=true
  alertClosed6=true
  alertStyle1=true
  alertStyle2=true
  alertStyle3=true
  alertStyle4=true

  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
  public isCollapsed6 = true;
  public isCollapsed7 = true;
  html1: string = codeData.alertHTML1;
  ts1: string = codeData.alertTS1;
  html2: string = codeData.alertHTML2;
  ts2: string = codeData.alertTS2;
  html3: string = codeData.alertHTML3;
  ts3: string = codeData.alertTS3;
  html4: string = codeData.alertHTML4;
  ts4: string = codeData.alertTS4;
  html5: string = codeData.alertHTML5;
  ts5: string = codeData.alertTS5;
  html6: string = codeData.alertHTML6;
  ts6: string = codeData.alertTS6;
  html7: string = codeData.alertHTML7;
  ts7: string = codeData.alertTS7;
};




