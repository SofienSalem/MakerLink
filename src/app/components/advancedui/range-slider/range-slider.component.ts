import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Options } from 'ngx-slider-v2';
import { ICompany } from 'src/app/_interfaces/ICompany';
import { CompanyService } from 'src/app/_services/maker/company.service';
interface modernSliderDetails {
  value: number;
  floor: number;
  ceil: number;
  showSelectionBar: boolean;

};
@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {


  totalCompanies: number | undefined;
  companiesByTroisPrinting: number | undefined;
  companiesByCncMachining: number | undefined;
  companiesByLaserCutting: number | undefined;
  companiesByEdMachining: number | undefined;

  percentageTroisPrinting: number | undefined;
  percentageCncMachining: number | undefined;
  percentageLaserCutting: number | undefined;
  percentageEdMachining: number | undefined;
  displayedColumns: string[] = ['idCompany', 'name', 'location', 'website','imageCompany', 'userEmail'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private companyService: CompanyService) { }
  dataSource = new MatTableDataSource<ICompany>([]);

  filterValue: string = '';

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

filter():void {

  this.dataSource.filterPredicate = (data: ICompany, filter: string): boolean => {
    const transformedFilter = filter.trim().toLowerCase();
    return (data.name && data.name.toLowerCase().includes(transformedFilter)) ||
           (data.location && data.location.toLowerCase().includes(transformedFilter)) ||
           (data.website && data.website.toLowerCase().includes(transformedFilter)) ||
           (data.user && data.user.email && data.user.email.toLowerCase().includes(transformedFilter)) || false;
  };
}

  ngOnInit(): void {
    this.getAllCompaniesData();
    this.loadAllCompanies();
    this.filter();

  }

  getAllCompaniesData(): void {
    this.companyService.countAllCompanies().subscribe(
      (count: number) => {
        this.totalCompanies = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching total companies:', error);
      }
    );

    this.companyService.countCompaniesByTroisPrinting().subscribe(
      (count: number) => {
        this.companiesByTroisPrinting = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching companies by Trois Printing:', error);
      }
    );

    this.companyService.countCompaniesByCncMachining().subscribe(
      (count: number) => {
        this.companiesByCncMachining = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching companies by CNC Machining:', error);
      }
    );

    this.companyService.countCompaniesByLaserCutting().subscribe(
      (count: number) => {
        this.companiesByLaserCutting = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching companies by Laser Cutting:', error);
      }
    );

    this.companyService.countCompaniesByEdMachining().subscribe(
      (count: number) => {
        this.companiesByEdMachining = count;
        this.calculatePercentages();
      },
      (error) => {
        console.error('Error fetching companies by ED Machining:', error);
      }
    );
  }

  loadAllCompanies(): void {
    this.companyService.getAllCompanies().subscribe(
      (companies: ICompany[]) => {
        this.dataSource.data = companies;
        this.dataSource.paginator = this.paginator;
        console.log("company is", this.dataSource.data)
      },
      (error) => {
        console.error('Error fetching all companies:', error);
      }
    );
  }

  calculatePercentages(): void {
    if (this.totalCompanies !== undefined) {
      if (this.companiesByTroisPrinting !== undefined) {
        this.percentageTroisPrinting = (this.companiesByTroisPrinting / this.totalCompanies) * 100;
      }
      if (this.companiesByCncMachining !== undefined) {
        this.percentageCncMachining = (this.companiesByCncMachining / this.totalCompanies) * 100;
      }
      if (this.companiesByLaserCutting !== undefined) {
        this.percentageLaserCutting = (this.companiesByLaserCutting / this.totalCompanies) * 100;
      }
      if (this.companiesByEdMachining !== undefined) {
        this.percentageEdMachining = (this.companiesByEdMachining / this.totalCompanies) * 100;
      }
    }
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  modernsliders1: modernSliderDetails[] = [
    {
      value: 10,
      floor: 10,
      ceil: 100,
      showSelectionBar: true

    },
    {
      value: 550,
      floor: 100,
      ceil: 1000,
      showSelectionBar: true
    }

  ];
  // Range with Minimum and Maximum Numbers

  minValue1: number = 200;
  maxValue1: number = 800;
  options1: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
    combineLabels: (minValue1: string, maxValue1: string): string => {
      return 'from ' + minValue1 + ' up to ' + maxValue1;
    }
  };

   // Negative Range
   negativeValue1: number = -500;
   negativeHighValue1: number = 500;
   negativeOptions1: Options = {
     floor: -1000,
     ceil:1000
   }




  // Second Slider

  modernsliders2: modernSliderDetails[] = [
    {
      value: 10,
      floor: 10,
      ceil: 100,
      showSelectionBar: true

    },
    {
      value: 550,
      floor: 100,
      ceil: 1000,
      showSelectionBar: true
    }

  ];
  // Range with Minimum and Maximum Numbers

  minValue2: number = 200;
  maxValue2: number = 800;
  options2: Options = {
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
    combineLabels: (minValue2: string, maxValue2: string): string => {
      return 'from ' + minValue2 + ' up to ' + maxValue2;
    }
  };

   // Negative Range
   negativeValue2: number = -500;
   negativeHighValue2: number = 500;
   negativeOptions2: Options = {
     floor: -1000,
     ceil:1000
   }



  // Third Slider

  modernsliders3: modernSliderDetails[] = [
    {
      value: 10,
      floor: 10,
      ceil: 100,
      showSelectionBar: true

    },
    {
      value: 550,
      floor: 100,
      ceil: 1000,
      showSelectionBar: true
    }

  ];
  // Range with Minimum and Maximum Numbers

  minValue3: number = 200;
  maxValue3: number = 800;
  options3: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
    combineLabels: (minValue3: string, maxValue3: string): string => {
      return 'from ' + minValue3 + ' up to ' + maxValue3;
    }
  };

   // Negative Range
   negativeValue3: number = -500;
   negativeHighValue3: number = 500;
   negativeOptions3: Options = {
     floor: -1000,
     ceil:1000
   }



  modernSliderOptions(slider: modernSliderDetails): Options {
    return {
      floor: slider.floor,
      ceil: slider.ceil,
      step:10,
      showSelectionBar: slider.showSelectionBar
    };
  }


}
