import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
page1=1;

	getPageSymbol(current: number) {
		return ['1', '2', '3', '4'][current - 1];
	}


  constructor() {

}
  ngOnInit(): void {
  }

}
