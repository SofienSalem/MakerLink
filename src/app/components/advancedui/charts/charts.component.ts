import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as codeData from '../../../shared/prismData/echart';
import { EstimateService } from 'src/app/_services/maker/estimate.service';
import { IEstimate } from 'src/app/_interfaces/IEstimate';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
let root: any = document.querySelector(':root')
const primaryColor = getComputedStyle(root)?.getPropertyValue("--primary-bg-color")
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

 
  totalEstimates: number | undefined;
  estimatesWithChoiceTrue: number | undefined;
  estimatesWithChoiceFalse: number | undefined;
  estimatesWithDeliveryManufacturingStarted: number | undefined;
  percentageTrue: number | undefined;
  percentageFalse: number | undefined;
  percentageManufacturingStarted: number | undefined;
  allEstimates: IEstimate[] = [];
  filterValue: string = '';

  dataSource = new MatTableDataSource<IEstimate>([]);
  displayedColumns: string[] = ['idEstimate', 'idDelivery', 'choice', 'price', 'currency', 'numberDays', 'observation', 'customerEmail', 'makerEmail', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filterPredicate ():void {
    this.dataSource.filterPredicate = (data: IEstimate, filter: string): boolean => {
      const formattedFilter = filter.trim().toLowerCase();
      const isMatch = (value: any) => value ? value.toString().toLowerCase().includes(formattedFilter) : false;
      return isMatch(data.delivery?.idDelivery) || 
             isMatch(data.choice) || 
             isMatch(data.price) || 
             isMatch(data.currency) || 
             isMatch(data.numberDays) || 
             isMatch(data.observation) || 
             isMatch(data.delivery?.piece?.user?.email) || 
             isMatch(data.user?.email);
    };
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
  constructor(private estimateService: EstimateService) { }

  ngOnInit(): void {
    this.countTotalEstimates();
    this.countEstimatesWithChoiceTrue();
    this.countEstimatesWithChoiceFalse();
    this.countEstimatesWithDeliveryManufacturingStarted();
    this.loadAllEstimates();
    this.filterPredicate();

  }

  countTotalEstimates(): void {
    this.estimateService.countTotalEstimates().subscribe(
      (count: number) => {
        this.totalEstimates = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching total estimates count:', error);
      }
    );
  }

  countEstimatesWithChoiceTrue(): void {
    this.estimateService.countEstimatesWithChoiceTrue().subscribe(
      (count: number) => {
        this.estimatesWithChoiceTrue = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching estimates with choice true count:', error);
      }
    );
  }

  countEstimatesWithChoiceFalse(): void {
    this.estimateService.countEstimatesWithChoiceFalse().subscribe(
      (count: number) => {
        this.estimatesWithChoiceFalse = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching estimates with choice false count:', error);
      }
    );
  }

  loadAllEstimates(): void {
    this.estimateService.getAllEstimates().subscribe(
      (estimates: IEstimate[]) => {
        this.allEstimates = estimates;
        this.dataSource.data = estimates;

        console.log("mes estimates", this.allEstimates)    
       },
      (error) => {
        console.error('Error fetching all estimates:', error);
      }
    );
  }


  countEstimatesWithDeliveryManufacturingStarted(): void {
    this.estimateService.countEstimatesWithDeliveryManufacturingStarted().subscribe(
      (count: number) => {
        this.estimatesWithDeliveryManufacturingStarted = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching estimates with delivery manufacturing started count:', error);
      }
    );
  }

  deleteEstimate(idEstimate: number): void {
    this.estimateService.deleteEstimate(idEstimate).subscribe(
      () => {
        this.allEstimates = this.allEstimates.filter(estimate => estimate.idEstimate !== idEstimate);
      },
      (error) => {
        console.error('Error deleting estimate:', error);
      }
    );
  }
  

  calculatePercentages(): void {
    if (this.totalEstimates !== undefined) {
      if (this.estimatesWithChoiceTrue !== undefined) {
        this.percentageTrue = (this.estimatesWithChoiceTrue / this.totalEstimates) * 100;
      }
      if (this.estimatesWithChoiceFalse !== undefined) {
        this.percentageFalse = (this.estimatesWithChoiceFalse / this.totalEstimates) * 100;
      }
      if (this.estimatesWithDeliveryManufacturingStarted !== undefined) {
        this.percentageManufacturingStarted = (this.estimatesWithDeliveryManufacturingStarted / this.totalEstimates) * 100;
      }
    }
  }
















  public echartLineBarOption: EChartsOption = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    tooltip: {
      show: true,
      showContent: true,
      alwaysShowContent: true,
      triggerOn: 'mousemove',
      trigger: 'axis',
      axisPointer: {
        label: {
          show: false,
        }
      }
    },
    xAxis: {
      type: 'category',
      data: ['2007-2008', '2009-2010', '2011-2012', '2013-2014', '2015-2016'],
      axisLine: {
        lineStyle: {
          color: 'rgba(119, 119, 142, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      },

    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: 'rgba(119, 119, 142, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(119, 119, 142, 0.2)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [10, 15, 9, 18, 10, 15]
      },
      {
        name: 'profit',
        type: 'line',
        smooth: true,
        data: [8, 5, 25, 10, 10]
      },
      {
        name: 'growth',
        type: 'bar',
        data: [10, 14, 10, 15, 9, 25]
      }
    ],
    color: [primaryColor, '#01b8ff',]
  }
  public isCollapsed = true;
  html1: string = codeData.echartsHTML1;
  ts1: string = codeData.echartsTS1;
}
