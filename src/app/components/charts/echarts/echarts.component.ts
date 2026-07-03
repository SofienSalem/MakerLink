import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as chartData from '../../../shared/data/chart/echart';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {

  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;


  constructor() { }

  ngOnInit(): void {
  }

  public echartLineOption = chartData.echartLineOption;
  public echartLineBarOption = chartData.echartLineBarOption;
  public echartHorizontalLineChart = chartData.echartHorizontalLineChart;
  public echartHorizontalLineBarChart = chartData.echartHorizontalLineBarChart;
  public echartStackedBarChart = chartData.echartStackedBarChart;
  public echartHoriStackedBarChart = chartData.echartHoriStackedBarChart;
  public dataAttributes1 = chartData.dataAttributes1;
  public dataAttributes2 = chartData.dataAttributes2;
  public dataAttributes3 = chartData.dataAttributes3;

}
