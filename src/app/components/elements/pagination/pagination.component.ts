import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import * as codeData from '../../../shared/prismData/pagination';

const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  providers: [NgbPaginationConfig],
})
export class PaginationComponent implements OnInit {
  ngOnInit(): void {

  }
  page = 4;
 modelPage=1;
 page2=1;
 page1=1;
 page3=1;
 page4=1;
 page5=1;
// page3=1;


	getPageSymbol(current: number) {
		return ['1', '2', '3'][current - 1];
	}

	selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}

	getPage(current: number) {
		return [ '2', '3', '4'][current - 1];
	}

	getPage1(current: number) {
		return [ '4', '5','6','7','8','9','10'][current - 1];
	}
constructor(config: NgbPaginationConfig) {
  // customize default values of paginations used by this component tree
  config.size = 'sm';
  config.boundaryLinks = true;
}
public isCollapsed = true;
public isCollapsed2 = true;
public isCollapsed3 = true;
public isCollapsed4 = true;
public isCollapsed5 = true;
public isCollapsed6 = true;


html1: string = codeData.pageHTML1;
ts1: string = codeData.pageTS1;
html2: string = codeData.pageHTML2;
ts2: string = codeData.pageTS2;
html3: string = codeData.pageHTML3;
ts3: string = codeData.pageTS3;
html4: string = codeData.pageHTML4;
ts4: string = codeData.pageTS4;
html5: string = codeData.pageHTML5;
html6: string = codeData.pageHTML6;

}

//  ngOnInit(): void {
 // }


