import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IDelivery } from 'src/app/_interfaces/IDelivery';
import { DeliveryService } from 'src/app/_services/client/delivery.service';
import { EstimateService } from 'src/app/_services/maker/estimate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {


  totalDeliveries: number = 0;
  deliveriesWithManufacturingStarted: number = 0;
  deliveriesWithChosenEstimate: number = 0;
  deliveriesWithChosenEstimateFalse: number = 0;
  percentage: number | undefined;
  percentageManufacturingStarted: number | undefined;
  percentageChosenEstimateFalse: number | undefined;

  dataSource = new MatTableDataSource<IDelivery>([]);
  displayedColumns: string[] = ['idDelivery', 'idPiece', 'region', 'homeDelivery', 'homeAbroadDelivery', 'userEmail', 'actions'];
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  allDeliveries: IDelivery[] = [];

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  filterPredicate():void{
    this.dataSource.filterPredicate = (data: IDelivery, filter: string): boolean => {
      const formattedFilter = filter.trim().toLowerCase();
      const isMatch = (value: any) => value ? value.toString().toLowerCase().includes(formattedFilter) : false;
      return isMatch(data.region) || 
             isMatch(data.homeDelivery) || 
             isMatch(data.homeAbroadDelivery) || 
             isMatch(data.piece?.user?.email);
    };
  }
 


  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.filterPredicate();
    this.countTotalDeliveries();
    this.countDeliveriesWithManufacturingStarted();
    this.countDeliveriesWithChosenEstimate();
    this.countDeliveriesWithChosenEstimateFalse();
    this.loadAllDeliveries();


  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  countTotalDeliveries() {
    this.deliveryService.countTotalDeliveries().subscribe(
      (count: number) => {
        this.totalDeliveries = count;
        this.calculatePercentage();
        this.calculatePercentageManufacturingStarted();
        this.calculatePercentageChosenEstimateFalse();

      },
      (error) => {
        console.error('Error fetching total deliveries count:', error);
      }
    );
  }

  countDeliveriesWithManufacturingStarted() {
    this.deliveryService.countDeliveriesWithManufacturingStarted().subscribe(
      (count: number) => {
        this.deliveriesWithManufacturingStarted = count;
        this.calculatePercentageManufacturingStarted();
      },
      (error) => {
        console.error('Error fetching deliveries with manufacturing started count:', error);
      }
    );
  }

  countDeliveriesWithChosenEstimate() {
    this.deliveryService.countDeliveriesWithChosenEstimate().subscribe(
      (count: number) => {
        this.deliveriesWithChosenEstimate = count;
        this.calculatePercentage();
      },
      (error) => {
        console.error('Error fetching deliveries with chosen estimate count:', error);
      }
    );
  }

  
  countDeliveriesWithChosenEstimateFalse() {
    this.deliveryService.countDeliveriesWithChosenEstimateFalse().subscribe(
      (count: number) => {
        this.deliveriesWithChosenEstimateFalse = count;
        this.calculatePercentageChosenEstimateFalse();
      },
      (error) => {
        console.error('Error fetching deliveries with chosen estimate false count:', error);
      }
    );
  }

  loadAllDeliveries() {
    this.deliveryService.getAllDeliveries().subscribe(
      (deliveries: IDelivery[]) => {
        this.allDeliveries = deliveries;
        this.dataSource.data = deliveries;

      },
      (error) => {
        console.error('Error fetching all deliveries:', error);
      }
    );
  }


  deleteDelivery(idDelivery: number): void {
    this.deliveryService.deleteDeliveryAndPiece(idDelivery).subscribe(
      () => {
        console.log(`Delivery with id ${idDelivery} deleted`);
        this.loadAllDeliveries(); // Refresh the list after deletion
      },
      (error) => {
        console.error('Error deleting delivery:', error);
      }
    );
  }








  calculatePercentage(): void {
    if (this.totalDeliveries > 0 && this.deliveriesWithChosenEstimate >= 0) {
      this.percentage = (this.deliveriesWithChosenEstimate / this.totalDeliveries) * 100;
    } else {
      this.percentage = 0;
    }
  }

  calculatePercentageManufacturingStarted(): void {
    if (this.totalDeliveries > 0 && this.deliveriesWithManufacturingStarted >= 0) {
      this.percentageManufacturingStarted = (this.deliveriesWithManufacturingStarted / this.totalDeliveries) * 100;
    } else {
      this.percentageManufacturingStarted = 0;
    }
  }

  calculatePercentageChosenEstimateFalse(): void {
    if (this.totalDeliveries > 0 && this.deliveriesWithChosenEstimateFalse >= 0) {
      this.percentageChosenEstimateFalse = (this.deliveriesWithChosenEstimateFalse / this.totalDeliveries) * 100;
    } else {
      this.percentageChosenEstimateFalse = 0;
    }
  }








}













