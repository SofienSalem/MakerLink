import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IDelivery } from 'src/app/_interfaces/IDelivery';
import { IEstimate } from 'src/app/_interfaces/IEstimate';
import { DeliveryService } from 'src/app/_services/client/delivery.service';
import { EstimateService } from 'src/app/_services/maker/estimate.service';

@Component({
  selector: 'app-content-scroll-bar',
  templateUrl: './content-scroll-bar.component.html',
  styleUrls: ['./content-scroll-bar.component.scss']
})
export class ContentScrollBarComponent implements OnInit {

  dataSource = new MatTableDataSource<IDelivery>([]);
  displayedColumns: string[] = ['idDelivery', 'idPiece', 'ClientEmail', 'Status', 'Price', 'ManufacturerEmail', 'paymentDate', 'actions'];
  filterValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private deliveryService: DeliveryService, private estimateService: EstimateService) { }

  ngOnInit(): void {
    this.loadPaidDeliveries();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  private loadPaidDeliveries(): void {
    this.deliveryService.getAllPaidDeliveries().subscribe({
      next: (deliveries) => {
        this.dataSource.data = deliveries;
        this.fetchEstimatesForDeliveries();
      },
      error: (err) => {
        console.error('Error fetching deliveries', err);
      }
    });
  }

  private fetchEstimatesForDeliveries(): void {
    this.dataSource.data.forEach(delivery => {
      if (delivery.idDelivery) {
        this.estimateService.getEstimationWithIsChoiceTrue(delivery.idDelivery).subscribe({
          next: (estimate: IEstimate) => {
            if (estimate) {
              // Adjust price based on delivery details
              let adjustedPrice = estimate.price || 0;
              if (estimate.delivery) {
                if (estimate.delivery.homeDelivery === 20) {
                  adjustedPrice += 6;
                }
                if (estimate.delivery.homeAbroadDelivery) {
                  adjustedPrice += 70;
                }
              }
              // Attach additional data to the delivery for display purposes
              (delivery as any).manufacturerEmail = estimate.user?.email;
              (delivery as any).adjustedPrice = adjustedPrice;
            }
          },
          error: (err) => {
            console.error(`Error fetching estimate for delivery ID: ${delivery.idDelivery}`, err);
          }
        });
      }
    });
  }

  markAsArchived(idDelivery: number): void {
    this.deliveryService.markPaidAsArchived(idDelivery).subscribe({
      next: (updatedDelivery) => {
        // Handle the UI update or any other actions after archiving
        console.log(`Delivery ${idDelivery} marked as archived.`);
        this.loadPaidDeliveries();
      },
      error: (err) => {
        console.error(`Error marking delivery ${idDelivery} as archived`, err);
      }
    });
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: IDelivery, filter: string) => {
      const clientEmail = data.piece?.user.email.toLowerCase() || '';
      const manufacturerEmail = (data as any).manufacturerEmail ? (data as any).manufacturerEmail.toLowerCase() : '';
      filter = filter.trim().toLowerCase();
      return clientEmail.includes(filter) || manufacturerEmail.includes(filter);
    };
  }
  
}