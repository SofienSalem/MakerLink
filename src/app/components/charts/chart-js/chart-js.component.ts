import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import * as chartData from '../../../shared/data/chart/chartjs';
@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit {

  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //gradient bar chart
    const canvas:any = (<HTMLCanvasElement>this.Canvas.nativeElement).getContext('2d');
    const gradient = canvas.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, '#285cf7');
    gradient.addColorStop(1, '#f7557a');
    new Chart.Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: '# of Votes',
          data: [12, 39, 20, 10, 25, 18],
          backgroundColor: gradient,
          barPercentage: 0.6,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins:{
          legend: {
            display: false,

          },
        },
        scales: {
          y: {
            max: 80,
            ticks: {
              color: "rgba(171, 167, 167,0.9)",
            },
            grid: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',

            }
          },
          x: {
            ticks: {
              color: "rgba(171, 167, 167,0.9)",
            },
            grid: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',

            }
          }
        }
      }
    });

    //Area Chart
    const ctx:any = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    const areaGradient1 = ctx.createLinearGradient(0, 350, 0, 0);
    areaGradient1.addColorStop(0, 'rgba(247, 85, 122, 0)');
    areaGradient1.addColorStop(1, 'rgba(247, 85, 122, .5)');

    const areaGradient2 = ctx.createLinearGradient(0, 280, 0, 0);
    areaGradient2.addColorStop(0, 'rgba(0, 123, 255, 0)');
    areaGradient2.addColorStop(1, 'rgba(0, 123, 255, .3)');
    const area_chart = new Chart.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
          borderColor: '#f7557a',
          borderWidth: 1,
          backgroundColor: areaGradient1,
          tension:0.4,
          fill: 'origin'
        }, {
          data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
          borderColor: '#007bff',
          borderWidth: 1,
          backgroundColor: areaGradient2,
          tension:0.4,
          fill: 'origin'
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins:{
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              color: "rgba(171, 167, 167,0.9)",
            },
            grid: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',

            },
          },
          x: {
            ticks: {
              color: "rgba(171, 167, 167,0.9)",
            },
            grid: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',

            },
          }
        }
      }
    })

  }

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartType = chartData.lineChartType
  public lineChartLegend = chartData.lineChartLegend
  public lineChartData = chartData.lineChartData

  //Doughnut and Pie Chart Data
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;

  //Bar Chart (Vertical)
  public barChart2Options = chartData.barChart2Options;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Data = chartData.barChart2Data;

  // Solid Color
  public solidColorOptions = chartData.solidColorChartOptions;
  public solidColorType = chartData.solidColorChartType;
  public solidColorData = chartData.solidColorChartData;
  public solidColorLegend = chartData.solidColorLegend

  //polar
  public polarAreaChartLabels = chartData.polarAreaChartLabels
  public polarAreaChartData = chartData.polarAreaChartData
  public polarAreaLegend = chartData.polarAreaLegend
  public polarChartOptions = chartData.polarChartOptions
  public polarAreaChartType = chartData.polarAreaChartType





}
