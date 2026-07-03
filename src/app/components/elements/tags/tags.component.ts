import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';

import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as codeData from '../../../shared/prismData/tags';
 @Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl:any = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput')
   fruitInput!: ElementRef<HTMLInputElement>;
  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed8 = true;
  public isCollapsed9 = true;
  public isCollapsed10 = true;
  public isCollapsed11 = true;
  public isCollapsed12 = true;
  html1: string = codeData.tagsHTML1;
  ts1: string = codeData.tagsTS1;
  html2: string = codeData.tagsHTML2;
  ts2: string = codeData.tagsTS2;
  html3: string = codeData.tagsHTML2;

  html8: string = codeData.tagsHTML8;
  html9: string = codeData.tagsHTML9;
  html10: string = codeData.tagsHTML10;
  html11: string = codeData.tagsHTML11;
  html12: string = codeData.tagsHTML11;

  }



