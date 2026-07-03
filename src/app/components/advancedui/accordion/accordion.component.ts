import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { IPiece } from 'src/app/_interfaces/IPiece';
import { DeliveryService } from 'src/app/_services/client/delivery.service';
import { PieceService } from 'src/app/_services/client/piece.service';
import { EstimateService } from 'src/app/_services/maker/estimate.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [NgbAccordionConfig],
})
export class AccordionComponent implements OnInit {
  pieceCount: number | undefined;
  estimatedPieceCount: number | undefined;
  startedManufacturingCount: number | undefined;
  percentage: number | undefined;
  percentagePieceSucces: number | undefined;
  piecesWithoutDeliveryCount: number | undefined;
  piecesWithDelivery: IPiece[] = [];
  dataSource = new MatTableDataSource<IPiece>();
  displayedColumns: string[] = ['idPiece', 'process', 'material', 'quantity', 'technicalDrawing', 'filePath', 'additionalNotes', 'userEmail', 'actions'];
  processes: string[] = ['Trois Printing', 'Laser Cutting', 'Ed Machining', 'Cnc Machining'];

  filterValue: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;




  constructor(config: NgbAccordionConfig,
             private pieceService: PieceService,
             private estimateService: EstimateService,
             private deliveryService: DeliveryService
  ) {



    config.closeOthers = true;
    config.type = 'info';

  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
  appfilterprocess(): void {
    this.dataSource.filterPredicate = (data: IPiece, filter: string) => {
      if (data.process) {
        const formattedProcess = this.formatProcess(data.process);
        return filter === '' || formattedProcess.toLowerCase().includes(filter);
      }
      return false;
  }
}

  formatProcess(process: string): string {
    return process.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');
  }

  ngOnInit(): void {
this.appfilterprocess();

    this.loadPieceCount();
    this.loadEstimatedPieceCount();
    this.loadStartedManufacturingCount();
    this.loadPiecesWithDelivery();
    this.loadPiecesWithoutDeliveryCount();

  }

  loadPieceCount(): void {
    this.pieceService.getTotalPieceCount().subscribe(count => {
      this.pieceCount = count;
      this.calculatePercentage();
      this.calculatePercentagePieceSucces();
      


    });

  }


  loadStartedManufacturingCount(): void {
    this.deliveryService.countPiecesWithStartedManufacturing().subscribe(count => {
      this.startedManufacturingCount = count;
      this.calculatePercentage();
      this.calculatePercentagePieceSucces();


    });
  }

  loadEstimatedPieceCount(): void {
    this.pieceService.countEstimatedPiecesByUserMaker().subscribe(count => {
      this.estimatedPieceCount = count;
      this.calculatePercentage();


    });

  }

  loadPiecesWithoutDeliveryCount(): void {
    this.pieceService.getPiecesWithoutDelivery().subscribe(count => {
      this.piecesWithoutDeliveryCount = count;
    });
  }


  loadPiecesWithDelivery(): void {
    this.pieceService.getAllPiecesWithDelivery().subscribe(pieces => {
      this.piecesWithDelivery = pieces;
      this.dataSource.data = pieces;
      this.dataSource.paginator = this.paginator; // Lier le pagineur après avoir défini les données


    });
  }

  calculatePercentage(): void {
    if (this.pieceCount && this.estimatedPieceCount) {
      this.percentage = (this.estimatedPieceCount / this.pieceCount) * 100;
    }
  }

  calculatePercentagePieceSucces(): void {
    if (this.pieceCount && this.startedManufacturingCount) {
      this.percentagePieceSucces = (this.startedManufacturingCount / this.pieceCount) * 100;
    }
  }




  downloadPieceZip(idPiece: number): void {
    this.pieceService.downloadPieceZip(idPiece).subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const matches = contentDisposition?.match(/filename="([^"]+)"/);
      const filename = matches ? matches[1] : 'file.zip';

      const blob = new Blob([response.body!], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });

  }

  downloadTechnicalDrawing(idDelivery: number): void {
    this.deliveryService.downloadTechnicalDrawing(idDelivery).subscribe(response => {
      const blob = new Blob([response.body!], { type: response.headers.get('Content-Type')! });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = response.headers.get('Content-Disposition')?.split('filename=')[1].replace(/"/g, '') || 'technical_drawing.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

  downloadTechnicalDrawingByPiece(idPiece: number | undefined): void {
    if (idPiece !== undefined) {
      this.deliveryService.getIdDeliveryWithIdPiece(idPiece).subscribe(idDelivery => {
        this.downloadTechnicalDrawing(idDelivery);
      });
    }
  }
  

  deletePiece(idPiece: number): void {
    this.pieceService.deletePiece(idPiece).subscribe(
      response => {
        console.log(response); // Afficher la réponse ou montrer une notification de succès
        this.loadPiecesWithDelivery(); // Recharger la liste des pièces après suppression
      },
      error => {
        console.error('There was an error!', error); // Afficher une notification d'erreur
      }
    );
  }
  













  






















  FirstGradient() {
    this.isFirstGradient = !this.isFirstGradient;
    if (this.isFirstGradient == true) {
      document.querySelector('.firstgradient')?.classList.remove('collapsed');
    } else {
      document.querySelector('.firstgradient')?.classList.add('collapsed');
    }
  }

  SecondGradient() {
    this.isSecondGradient = !this.isSecondGradient;
    if (this.isSecondGradient == true) {
      document.querySelector('.secondgradient')?.classList.remove('collapsed');
    } else {
      document.querySelector('.secondgradient')?.classList.add('collapsed');
    }
  }

  public isFirstGradient = false;
  public isSecondGradient = false;

}
