import { ChangeDetectorRef, Component,  OnInit, } from '@angular/core';

import * as chartData from '../../../shared/data/chart/chartwidgets';
import * as chartData1 from '../../../shared/data/chart/echart';
import { ContactService } from 'src/app/_services/_Apps/contact.service';
import { UsersService } from 'src/app/_services/_Apps/users.service';
import { BlogService } from 'src/app/_services/_Apps/blog.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { ProfileService } from 'src/app/_services/_editProfile/profile.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent implements OnInit {


  totalContacts: number | undefined;
  activeContactsByMaker: number | undefined;
  activeContactsByClient: number | undefined;
  activeContactsByVisitor: number | undefined;

  totalNonAdminUsers: number | undefined;
  totalMakers: number | undefined;
  totalClients: number | undefined;

  totalBlogs: number | undefined;
  totalLikes: number | undefined;
  totalDislikes: number | undefined;
  totalComments: number | undefined;
  readonly ROLE_MAKER = 'MAKER';
  readonly ROLE_CLIENT = 'CLIENT';

  public lineChartData: ChartDataset<'line'>[] = [
    { data: [], label: 'Users Added by MAKER', borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.3)' },
    { data: [], label: 'Users Added by CLIENT', borderColor: 'green', backgroundColor: 'rgba(0,255,0,0.3)' }
  ];
  public lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';


  constructor(private contactService: ContactService,
              private usersService: UsersService,
              private blogService: BlogService,
              private profileService: ProfileService,
              private cdr: ChangeDetectorRef
  ) {}


  loadUserCounts() {
    forkJoin({
      makerData: this.profileService.countUsersAddedByMonthAndRole(this.ROLE_MAKER),
      clientData: this.profileService.countUsersAddedByMonthAndRole(this.ROLE_CLIENT)
    }).subscribe(({ makerData, clientData }) => {
      this.lineChartData[0].data = makerData;
      this.lineChartData[1].data = clientData;
      setTimeout(() => {
        this.cdr.detectChanges(); // Detect changes manually
      }, 0);
      console.log("maker", this.lineChartData[0].data);
      console.log("client", this.lineChartData[1].data);
    });
  }

  ngOnInit(): void {
    this.getTotalContacts();
    this.getActiveContactsByMaker();
    this.getActiveContactsByClient();
    this.getActiveContactsByVisitor();
    this.getTotalNonAdminUsers();
    this.getTotalMakers();
    this.getTotalClients();
    this.getTotalBlogs();
    this.getTotalLikes();
    this.getTotalDislikes();
    this.getTotalComments();
    this.loadUserCounts();

  }

  getTotalContacts(): void {
    this.contactService.countAllContacts().subscribe(
      (count: number) => {
        this.totalContacts = count;
      },
      (error) => {
        console.error('Error fetching total contacts:', error);
      }
    );
  }

  getActiveContactsByMaker(): void {
    this.contactService.countActiveContactsByMaker().subscribe(
      (count: number) => {
        this.activeContactsByMaker = count;
      },
      (error) => {
        console.error('Error fetching active contacts by maker:', error);
      }
    );
  }

  getActiveContactsByClient(): void {
    this.contactService.countActiveContactsByClient().subscribe(
      (count: number) => {
        this.activeContactsByClient = count;
      },
      (error) => {
        console.error('Error fetching active contacts by client:', error);
      }
    );
  }

  getActiveContactsByVisitor(): void {
    this.contactService.countActiveContactsByVisitor().subscribe(
      (count: number) => {
        this.activeContactsByVisitor = count;
      },
      (error) => {
        console.error('Error fetching active contacts by visitor:', error);
      }
    );
  }

  getTotalNonAdminUsers(): void {
    this.usersService.getCountOfNonAdminUsers().subscribe(
      (count: number) => {
        this.totalNonAdminUsers = count;
      },
      (error) => {
        console.error('Error fetching total non-admin users:', error);
      }
    );
  }

  getTotalMakers(): void {
    this.usersService.getCountOfMakers().subscribe(
      (count: number) => {
        this.totalMakers = count;
      },
      (error) => {
        console.error('Error fetching total makers:', error);
      }
    );
  }

  getTotalClients(): void {
    this.usersService.getCountOfClients().subscribe(
      (count: number) => {
        this.totalClients = count;
      },
      (error) => {
        console.error('Error fetching total clients:', error);
      }
    );
  }


  getTotalBlogs(): void {
    this.blogService.countAllBlogs().subscribe(
      (count: number) => {
        this.totalBlogs = count;
      },
      (error) => {
        console.error('Error fetching total blogs:', error);
      }
    );
  }

  getTotalLikes(): void {
    this.blogService.countAllLikesInAllBlogs().subscribe(
      (count: number) => {
        this.totalLikes = count;
      },
      (error) => {
        console.error('Error fetching total likes:', error);
      }
    );
  }

  getTotalDislikes(): void {
    this.blogService.countAllDislikeInAllBlogs().subscribe(
      (count: number) => {
        this.totalDislikes = count;
      },
      (error) => {
        console.error('Error fetching total dislikes:', error);
      }
    );
  }

  getTotalComments(): void {
    this.blogService.countAllCommentsInAllBlogs().subscribe(
      (count: number) => {
        this.totalComments = count;
      },
      (error) => {
        console.error('Error fetching total comments:', error);
      }
    );
  }



  public lineChartOptionsOne = chartData.lineChartOptions
  public lineChartTypeOne = chartData.lineChartType
  public lineChartLegendOne = chartData.lineChartLegend
  public lineChartDataOne = chartData.lineChartData
  public echartLineOption2 = chartData1.echartLineOption2;

  

  

}
