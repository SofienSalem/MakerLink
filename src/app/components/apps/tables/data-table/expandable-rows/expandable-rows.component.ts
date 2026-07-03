import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { IDelivery } from 'src/app/_interfaces/IDelivery';
import { MatPaginator } from '@angular/material/paginator';
import { DeliveryService } from 'src/app/_services/client/delivery.service';

@Component({
  selector: 'app-expandable-rows',
  templateUrl: './expandable-rows.component.html',
  styleUrls: ['./expandable-rows.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandableRowsComponent implements OnInit {
  filterValue: string = '';
  dataSource = new MatTableDataSource<IDelivery>([]);
  displayedColumns: string[] = ['idDelivery', 'idPiece', 'region', 'homeDelivery', 'homeAbroadDelivery', 'userEmail', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.getCompletedAndPaidDeliveries();
  }

  getCompletedAndPaidDeliveries(): void {
    this.deliveryService.getCompletedAndPaidDeliveries().subscribe(
      (data: IDelivery[]) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching deliveries:', error);
      }
    );
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  // Nouvelle méthode pour mettre à jour le statut de façonnage
  updateShapingStatus(idDelivery: number): void {
    this.deliveryService.updateShapingStatus(idDelivery).subscribe(
      () => {
        console.log('Shaping status updated');
        // Rafraîchir les données ou mettre à jour l'UI si nécessaire
        this.getCompletedAndPaidDeliveries();
      },
      (error) => {
        console.error('Error updating shaping status:', error);
      }
    );
  }


  archiveShipping(idDelivery: number): void {
    this.deliveryService.archiveShipping(idDelivery).subscribe(
      (updatedDelivery) => {
        console.log('Shipping archived:', updatedDelivery);
        // Optionally, update the UI to reflect the archived status
        this.getCompletedAndPaidDeliveries(); // Refresh the list or handle the UI update accordingly
      },
      (error) => {
        console.error('Error archiving shipping:', error);
      }
    );
  }








}