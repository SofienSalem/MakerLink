import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TableService } from '../../../../_services/table/table.service';
import { IUser } from 'src/app/_interfaces/IUser';
import { UploadService } from 'src/app/_services/_editProfile/upload.service';



@Component({
  selector: 'app-defaulttable',
  templateUrl: './defaulttable.component.html',
  styleUrls: ['./defaulttable.component.scss']
})
export class DefaulttableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'email', 'country', 'city', 'role', 'phoneNumber', 'codePostal'];  
  /*displayedColumnsforMaker: string[] = ['id', 'firstName', 'lastName', 'address', 'email', 'country', 'city', 'role', 'phoneNumber', 'codePostal', 'badge', 'activate', 'deactivate'];*/
  displayedColumnsforMaker: string[] = ['id', 'firstName', 'lastName',  'email',  'badge', 'activate', 'deactivate'];

  dataSourceUsers = new MatTableDataSource<IUser>();
  dataSourceMakers = new MatTableDataSource<IUser>();

  @ViewChild(MatPaginator) paginatorUsers!: MatPaginator;
  @ViewChild(MatPaginator) paginatorMakers!: MatPaginator;
  @ViewChild(MatSort) sortUsers!: MatSort;
  @ViewChild(MatSort) sortMakers!: MatSort;

  constructor(
    private tableservice: TableService,
    private uploadService: UploadService
  ) {
 

    // Assign the data to the data source for the table to render
    this.dataSourceUsers = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSourceUsers.paginator = this.paginatorUsers;
    this.dataSourceUsers.sort = this.sortUsers;
    this.dataSourceMakers.paginator = this.paginatorMakers;
    this.dataSourceMakers.sort = this.sortMakers;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceUsers.paginator) {
      this.dataSourceUsers.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.loadAllUsers();
    this.loadAllMakers();
  }
  loadAllUsers() {
    this.tableservice.getAllUsers().subscribe(users => {
      this.dataSourceUsers.data = users;
    });
  }
  loadAllMakers() {
    this.tableservice.getAllMakers().subscribe(makers => {
      this.dataSourceMakers.data = makers;
    });
  }
  


  applyFilterUsers(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsers.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceUsers.paginator) {
      this.dataSourceUsers.paginator.firstPage();
    }
  }

  applyFilterMakers(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMakers.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceMakers.paginator) {
      this.dataSourceMakers.paginator.firstPage();
    }
  }


  
  activate(userId: number, activate: boolean) {
    const badgePath = activate ? '../../../../../assets/images/brand/badge.png' : '';
    if (activate) {
      this.uploadService.uploadImageFromAssets(badgePath).subscribe({
        next: response => {
          const imageUrl = response.secure_url;
          console.log('Image Uploaded Successfully:', imageUrl);
          this.updateMakerStatus(userId, true, imageUrl);
        },
        error: error => console.error('Erreur lors du téléchargement de l\'image:', error)
      });
    } else {
      // Supposons que désactiver le maker ne nécessite pas de badge
      this.updateMakerStatus(userId, false, '');
    }
  }

  updateMakerStatus(userId: number, activate: boolean, imageUrl: string) {
    this.tableservice.activateMaker(userId, activate, imageUrl).subscribe({
      next: user => {
        console.log(activate ? 'Maker activated successfully:' : 'Maker deactivated successfully:', user);
        this.loadAllMakers();  // Recharger la liste après modification
      },
      error: error => console.error(`Erreur lors de ${activate ? 'l\'activation' : 'la désactivation'} du maker:`, error)
    });
  }
  
  
  



}

