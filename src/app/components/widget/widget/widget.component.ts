import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserData } from './../../apps/tables/data-table/filter-sort-pagination/filter-sort-pagination.component';
import * as chartData from '../../../shared/data/chart/echart';

import {



  Image,

  ModalGalleryService,
  ModalGalleryRef,

} from '@ks89/angular-modal-gallery';

const DATA1 = [ {
  id:"2345",
  image :"./assets/images/users/male/1.jpg",
  name:"Megan Peters",
feedback:"please check pricing Info",
date:"July 13, 2022"

},
{
  id:"4562",
  image :"./assets/images/users/female/1.jpg",
  name:"Phil Vance",
feedback:"New stock",
date:"June 15, 2022"

},
{
  id:"2665",
  image :"./assets/images/users/male/4.jpg",
  name:"Samantha Slater",
feedback:"available item list",
date:"June 28, 2022"

},
{
  id:"8547",
  image :"./assets/images/users/female/5.jpg",
  name:"Joanne Nash",
feedback:"Provide Best Services",
date:"July 2, 2022"

},
{
  id:"3425",
  image :"./assets/images/users/female/4.jpg",
  name:"Ruby Wisely",
feedback:"Best stock",
date:"May 28, 2022"

},
{
  id:"1245",
  image :"./assets/images/users/male/2.jpg",
  name:"Daneil Smash",
feedback:"new trends",
date:"Apr 2, 2022"

},
]

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;
UserData=DATA1;
  emptyImagesArray: Image[] = [];

  constructor(private modalGalleryService: ModalGalleryService, private sanitizer: DomSanitizer) {}

  imagesRect: Image[] = [
    new Image( 0, {img:"./assets/images/photos/1.jpg" , }, { img: "./assets/images/photos/1.jpg"  }  ),
    new Image(1, {img: "./assets/images/photos/2.jpg" }, { img:"./assets/images/photos/2.jpg" }),
    new Image( 2, { img: "./assets/images/photos/3.jpg" },{ img: "./assets/images/photos/3.jpg", } ),
    new Image( 3, {img:"./assets/images/photos/4.jpg",  }, { img: "./assets/images/photos/4.jpg"} ),
    new Image(4, {img: "./assets/images/photos/5.jpg" }, { img: "./assets/images/photos/5.jpg"}),
    new Image(5, {img:  "./assets/images/photos/6.jpg", },{img: "./assets/images/photos/6.jpg" }),
    new Image(6, { img:  "./assets/images/photos/7.jpg" }, { img:  "./assets/images/photos/7.jpg" }),
    new Image(7, { img:  "./assets/images/photos/8.jpg" }, { img:  "./assets/images/photos/8.jpg" }),

  ];

  ngOnInit(): void {
  }

  openImageModalRowDescription(id: number, image: Image): void {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.imagesRect,
      currentImage: this.imagesRect[index]
    }) as ModalGalleryRef;
  }

  addRandomImage(): void {


    // add also to imagesRect
    const imageRectToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImageRect: Image = new Image(this.imagesRect.length - 1 + 1, imageRectToCopy.modal, imageRectToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImageRect];
  }


  trackById(index: number, item: Image): number {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  click = (id:any)=>{
    var data = this.UserData.filter((x: { id: any; }) =>{
      return x.id != id
    })
    this.UserData = data
  }
  public dataAttributes2 = chartData.dataAttributes2;
  public dataAttributes4 = chartData.dataAttributes4;
  public dataAttributes6 = chartData.dataAttributes6;
  public dataAttributes7 = chartData.dataAttributes7;
}
