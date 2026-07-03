import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {
 Image,
 ModalGalleryService,
  ModalGalleryRef,

} from '@ks89/angular-modal-gallery';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';




@Component({
  selector: 'app-filedetails',
  templateUrl: './filedetails.component.html',
  styleUrls: ['./filedetails.component.scss']
})

export class FiledetailsComponent implements OnInit {
  items!: GalleryItem[];
  emptyImagesArray: Image[] = [];

  imagesRect: Image[] = [
     new Image( 0, {img:"./assets/images/photos/1.jpg", }, { img: "./assets/images/photos/1.jpg" }  ),
     new Image(1, {img: "./assets/images/photos/2.jpg" }, { img: "./assets/images/photos/2.jpg" }),
     new Image( 2, { img: "./assets/images/photos/3.jpg" },{ img: "./assets/images/photos/3.jpg", } ),
     new Image( 3, {img:"./assets/images/photos/4.jpg",  }, { img: "./assets/images/photos/4.jpg"} ),
     new Image(4, {img: "./assets/images/photos/5.jpg" }, { img: "./assets/images/photos/5.jpg"}),
     new Image(5, {img:  "./assets/images/photos/6.jpg", },{img: "./assets/images/photos/6.jpg" }),
     new Image(6, { img:  "./assets/images/photos/7.jpg" }, { img:  "./assets/images/photos/7.jpg" }),
     new Image(7, { img:  "./assets/images/photos/8.jpg" }, { img:  "./assets/images/photos/8.jpg" }),

   ];

  imageData: any;

   constructor(private modalGalleryService: ModalGalleryService, private sanitizer: DomSanitizer) {}
   ngOnInit(): void {
    let ltr = document.querySelectorAll('#myonoffswitch54');
    let rtl = document.querySelectorAll('#myonoffswitch55');
    fromEvent(ltr, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: false }; // this will make the carousel refresh
    });
    fromEvent(rtl, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    });
    if(document.body.classList.contains("rtl")){
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    }

    // Creat gallery items
    this.items = this.imageData?.map(
      (item: { srcUrl: any; previewUrl: any; }) =>{
        return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
      }
    );
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
   customOptions: OwlOptions = {
    loop: true,
    rtl: false,

    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    center: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  slidesStore = [
    {
      id: '1',
      src: './assets/images/photos/1.jpg',
      alt: 'img',
     title: '221.jpg',
      size: '120kb',
    },
    {
      id: '2',
      src: './assets/images/photos/2.jpg',
      alt: 'img',
      size: '120kb',
      title: '222.jpg',
    },
    {
      id: '3',
      src: './assets/images/photos/3.jpg',
      alt: 'img',
      size: '120kb',
      title: '223.jpg',
    },
    {
      id: '4',
      src: './assets/images/photos/4.jpg',
      alt: 'img',
      size: '120kb',
      title: '224.jpg',
    },
    {
      id: '5',
      src: './assets/images/photos/5.jpg',
      alt: 'img',
      size: '120kb',
      title: '225.jpg',
    },
    {
      id: '6',
      src: './assets/images/photos/6.jpg',
      alt: 'img',
      size: '120kb',
      title: '226.jpg',
    },
    {
      id: '7',
      src: './assets/images/photos/7.jpg',
      alt: 'img',
      size: '120kb',
      title: '227.jpg',
    },
    {
      id: '8',
      src: './assets/images/photos/8.jpg',
      alt: 'img',
      size: '120kb',
      title: '228.jpg',
    },
    {
      id: '8',
      src: './assets/images/photos/9.jpg',
      alt: 'img',
      size: '120kb',
      title: '229.jpg',
    },
  ];
}


























