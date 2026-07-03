import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/chart/apex';


@Component({
  selector: 'app-apexcharts',
  templateUrl: './apexcharts.component.html',
  styleUrls: ['./apexcharts.component.scss']
})
export class ApexchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData1;
  public barData = chartData.BarData;
  public stackedbarData = chartData.StackedBarData;
  public donutData = chartData.DonutChartData;
  public pieData = chartData.PieChartData;
  public radicalbarData = chartData.RadialBarCircleData;
  public radicalmultipleData = chartData.RadialBarCircleMultipleData;


}
