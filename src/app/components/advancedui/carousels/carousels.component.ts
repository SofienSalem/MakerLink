import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';




interface Image {
  src: string;
  title?: string;
  alt?: string;
  id: number
}

interface item {
  photo: string;

}

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss'],

  animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'scale(1.4)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'scale(0.7)',
        opacity: 0.8,
      })),
      transition('active => inActive', [
        animate('0.5s')
      ]),
      transition('inActive => active', [
        animate('0.5s')
      ])
    ])
  ]
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselsComponent implements OnInit {
  options1: any
  activeSlides: any;
  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<<', '>>'],
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
        items: 1
      }
    },
    nav: true
  }


  pictureData = [
    {

      img: "./assets/images/photos/9.jpg",

    },
    {
      img: "./assets/images/photos/10.jpg",

    },
    {
      img: "./assets/images/photos/11.jpg",

    },
    {
      img: "./assets/images/photos/12.jpg",

    },
    {
      img: "./assets/images/photos/13.jpg",

    },
  ]

  pictureData1 = [
    {

      img: "./assets/images/photos/4.jpg",

    },
    {
      img: "./assets/images/photos/5.jpg",

    },
    {
      img: "./assets/images/photos/6.jpg",

    },
    {
      img: "./assets/images/photos/7.jpg",

    },
    {
      img: "./assets/images/photos/8.jpg",

    },
  ]

  pictureData2 = [
    {

      img: "./assets/images/photos/24.jpg",

    },
    {
      img: "./assets/images/photos/25.jpg",

    },
    {
      img: "./assets/images/photos/1.jpg",

    },
    {
      img: "./assets/images/photos/2.jpg",

    },
    {
      img: "./assets/images/photos/3.jpg",

    },
  ]
  pictureData3 = [
    {

      img: "./assets/images/photos/9.jpg",

    },
    {
      img: "./assets/images/photos/10.jpg",

    },
    {
      img: "./assets/images/photos/11.jpg",

    },
    {
      img: "./assets/images/photos/12.jpg",

    },
    {
      img: "./assets/images/photos/13.jpg",

    },
  ]
 

  pictureData4 = [
    {

      img: "./assets/images/photos/19.jpg",

    },
    {
      img: "./assets/images/photos/20.jpg",

    },
    {
      img: "./assets/images/photos/21.jpg",

    },
    {
      img: "./assets/images/photos/22.jpg",

    },
    {
      img: "./assets/images/photos/23.jpg",

    },
  ]

  pictureData5 = [
    {

      img: "./assets/images/photos/9.jpg",

    },
    {
      img: "./assets/images/photos/10.jpg",

    },
    {
      img: "./assets/images/photos/11.jpg",

    },
    {
      img: "./assets/images/photos/12.jpg",

    },
    {
      img: "./assets/images/photos/13.jpg",

    },
  ]
  pictureData6 = [
    {

      img: "./assets/images/photos/19.jpg",

    },
    {
      img: "./assets/images/photos/20.jpg",

    },
    {
      img: "./assets/images/photos/21.jpg",

    },
    {
      img: "./assets/images/photos/22.jpg",

    },
    {
      img: "./assets/images/photos/23.jpg",

    },
  ]
  pictureData7 = [
    {

      img: "./assets/images/photos/24.jpg",

    },
    {
      img: "./assets/images/photos/25.jpg",

    },
    {
      img: "./assets/images/photos/1.jpg",

    },
    {
      img: "./assets/images/photos/2.jpg",

    },
    {
      img: "./assets/images/photos/3.jpg",
    },
  ]
  pictureData8 = [
    {

      img: "./assets/images/photos/4.jpg",

    },
    {
      img: "./assets/images/photos/5.jpg",

    },
    {
      img: "./assets/images/photos/6.jpg",

    },
    {
      img: "./assets/images/photos/7.jpg",

    },
    {
      img: "./assets/images/photos/8.jpg",
    },
  ]
  pictureData9 = [
    {

      img: "./assets/images/photos/14.jpg",

    },
    {
      img: "./assets/images/photos/15.jpg",

    },
    {
      img: "./assets/images/photos/16.jpg",

    },
    {
      img: "./assets/images/photos/17.jpg",

    },
    {
      img: "./assets/images/photos/18.jpg",
    },
  ]
products=[
  {
  img: "./assets/images/photos/9.jpg",
},
{
  img: "./assets/images/photos/10.jpg",
},
{
  img: "./assets/images/photos/11.jpg",
},
{
  img: "./assets/images/photos/12.jpg",
},
{
  img: "./assets/images/photos/13.jpg",
}
]

  backgroundColorImages = [
    "./assets/images/photos/31.jpg",
    "./assets/images/photos/29.jpg",
    "./assets/images/photos/30.jpg",

  ]

  backgroundColorImages1 = [
    "./assets/images/photos/32.jpg",
    "./assets/images/photos/33.jpg",
    "./assets/images/photos/34.jpg",

  ]

  @ViewChild('carousel', { static: true }) carousel: any;
  paused: any;
  unpauseOnArrow!: boolean;
  pauseOnIndicator!: boolean;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  images: any;
  constructor(private el: ElementRef) {
    this.options1 = {
      animation: {
        animationClass: 'transition',
        animationTime: 500,
      },
      swipe: {
        swipeable: true,
        swipeVelocity: .004,
      },
      drag: {
        draggable: true,
        dragMany: true,
      },
      arrows: true,
      infinite: true,
      autoplay: {
        enabled: true,
        direction: 'right',
        delay: 5000,
        stopOnHover: true,
        speed: 6000,
      },
      breakpoints: [
        {
          width: 768,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ],
    }

 
    

  }

  ngOnInit() {

  }


  getPassedData(data: any) {
    this.activeSlides = data;
    // console.log(this.activeSlides);
  }


}

