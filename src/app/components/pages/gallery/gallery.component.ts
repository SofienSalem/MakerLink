

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {

  Image,

  ModalGalleryService,
  ModalGalleryRef,

} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
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
    new Image(8, { img:  "./assets/images/photos/9.jpg" }, { img:  "./assets/images/photos/9.jpg" }),
    new Image(9, { img:  "./assets/images/photos/10.jpg" }, { img:  "./assets/images/photos/10.jpg" }),
    new Image(10, { img:  "./assets/images/photos/11.jpg" }, { img:  "./assets/images/photos/11.jpg" }),
    new Image(11, { img:  "./assets/images/photos/12.jpg" }, { img:  "./assets/images/photos/12.jpg" })
  ];
  constructor(private modalGalleryService: ModalGalleryService, private sanitizer: DomSanitizer) {}
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
}






























