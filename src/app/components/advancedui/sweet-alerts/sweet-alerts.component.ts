import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IMachine } from 'src/app/_interfaces/IMachine';
import { MachineService } from 'src/app/_services/maker/machine.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alerts',
  templateUrl: './sweet-alerts.component.html',
  styleUrls: ['./sweet-alerts.component.scss']
})
export class SweetAlertsComponent implements OnInit {
  totalMachines: number | undefined;
  machinesByTroisPrinting: number | undefined;
  machinesByCncMachining: number | undefined;
  machinesByLaserCutting: number | undefined;
  machinesByEdMachining: number | undefined;
  percentageTroisPrinting: number | undefined;
  percentageCncMachining: number | undefined;
  percentageLaserCutting: number | undefined;
  percentageEdMachining: number | undefined;
  displayedColumns: string[] = ['idMachine', 'name', 'process', 'pricePerHour', 'currency', 'materials', 'userEmail', 'actions'];
  dataSource = new MatTableDataSource<IMachine>([]);
  filterValue: string = '';


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }


  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: IMachine, filter: string) => {
      if (data.process) {
        const formattedProcess = this.formatProcess(data.process);
        return filter === '' || formattedProcess.toLowerCase().includes(filter);
      }
      return false;
    };
    this.loadMachineData();
    this.loadAllMachines();
  }

  formatProcess(process: string): string {
    return process.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');
  }

  loadMachineData(): void {
    this.machineService.countAllMachinesTotal().subscribe(
      (total: number) => {
        this.totalMachines = total;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching total machines count:', error);
      }
    );

    this.machineService.countMachinesByTroisPrintingTotal().subscribe(
      (count: number) => {
        this.machinesByTroisPrinting = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching Trois Printing machines count:', error);
      }
    );

    this.machineService.countMachinesByCncMachiningTotal().subscribe(
      (count: number) => {
        this.machinesByCncMachining = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching CNC Machining machines count:', error);
      }
    );

    this.machineService.countMachinesByLaserCuttingTotal().subscribe(
      (count: number) => {
        this.machinesByLaserCutting = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching Laser Cutting machines count:', error);
      }
    );

    this.machineService.countMachinesByEdMachiningTotal().subscribe(
      (count: number) => {
        this.machinesByEdMachining = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching ED Machining machines count:', error);
      }
    );
  }

  loadAllMachines(): void {
    this.machineService.getAllMachines().subscribe(
      (machines: IMachine[]) => {
        this.dataSource.data = machines;
        this.dataSource.paginator = this.paginator;  // Lier le pagineur après avoir défini les données
      },
      (error) => {
        console.error('Error fetching all machines:', error);
      }
    );
  }

  deleteMachine(id: number): void {
    this.machineService.deleteMachine(id).subscribe(
      () => {
        // Afficher une alerte de succès
        Swal.fire('Deleted!', 'The machine has been deleted.', 'success');
        // Recharger la liste des machines
        this.loadAllMachines();
      },
      (error) => {
        // Afficher une alerte d'erreur
        Swal.fire('Error!', 'There was an error deleting the machine.', 'error');
        console.error('Error deleting machine:', error);
      }
    );
  }

  calculatePercentages(): void {
    if (this.totalMachines !== undefined) {
      if (this.machinesByTroisPrinting !== undefined) {
        this.percentageTroisPrinting = (this.machinesByTroisPrinting / this.totalMachines) * 100;
      }
      if (this.machinesByCncMachining !== undefined) {
        this.percentageCncMachining = (this.machinesByCncMachining / this.totalMachines) * 100;
      }
      if (this.machinesByLaserCutting !== undefined) {
        this.percentageLaserCutting = (this.machinesByLaserCutting / this.totalMachines) * 100;
      }
      if (this.machinesByEdMachining !== undefined) {
        this.percentageEdMachining = (this.machinesByEdMachining / this.totalMachines) * 100;
      }
    }
  }











































  Success() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary  me-2',
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Your message has been succesfully sent',
      showConfirmButton: true,
    });
  }

  Warning() {
    Swal.fire({
      icon: 'warning',
      title: 'Alert',
      text: 'Waring alert',
      confirmButtonColor: '#0052cc',
      cancelButtonColor: '#0052cc',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }

  Danger() {
    Swal.fire({
      icon: 'error',
      title: 'Alert',
      text: 'Danger alert',
      confirmButtonColor: '#0052cc',
      cancelButtonColor: '#0052cc',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }


  prompt() {
    Swal.fire({

      title: 'Add',
      text: 'Enter Your  Message',
      confirmButtonColor: '#0052cc',
      cancelButtonColor: '#0052cc',
      showCancelButton: true,
      confirmButtonText: 'Cancel',
      cancelButtonText: 'OK',
    });
  }

  confirm() {
    Swal.fire({
      icon: 'warning',
      title: 'Alert',
      text: 'Are you really want to exit',
      confirmButtonColor: '#0052cc',
      cancelButtonColor: '#0052cc',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }

  Info() {
    Swal.fire({
      icon: 'info',
      title: 'Alert',
      text: 'Info alert',
      confirmButtonColor: '#0052cc',
      cancelButtonColor: '#0052cc',
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
    });
  }


  // custom Alerts
  public SimpleMessage = 'Slica';
  public SimpleTitle = 'Slica';
  simpleAlert() {
    Swal.fire({
      text: this.SimpleMessage,
      showConfirmButton: true,
      confirmButtonColor: '#0052cc',
    });
  }

  titleAlert() {
    Swal.fire({
      title: this.SimpleTitle,
      showConfirmButton: true,
      confirmButtonColor: '#0052cc',
    });
  }

  imageAlert() {
    Swal.fire({
      title: this.SimpleTitle,
      text: this.SimpleMessage,
      imageUrl: "./assets/images/brand/icon.png",
      imageAlt: 'Custom image',
      confirmButtonColor: '#0052cc',
    });
  }

  timerAlert() {
    Swal.fire({
      title: this.SimpleTitle,
      html: 'Your Message (Close after 2 Seconds)',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

}
